
const puppeteer = require('puppeteer');
const fs = require('fs');

const dizi = [
    100063, 100063, 100056, 100013, 100014, 100014, 100012, 100020, 100030, 100029,
    105432, 101145, 101126, 101164, 101180, 101207, 101217, 100165, 108122, 109438,

];

// Tüm ürün verilerini saklayacak array
const allProducts = [];

// Veri çekme fonksiyonu
async function scrapeProductData(page, productNumber) {
    try {
        console.log(`Ürün ${productNumber} işleniyor...`);
        
        // Sayfaya git - retry ile
        let retryCount = 0;
        const maxRetries = 3;
        
        while (retryCount < maxRetries) {
            try {
                await page.goto(`https://www.merckmillipore.com/TR/en/product/mm/${productNumber}`, {
                    waitUntil: 'networkidle2',
                    timeout: 45000
                });

                // Sayfanın yüklenmesini bekle - daha uzun süre
                await new Promise(resolve => setTimeout(resolve, 5000));
                
                // Sayfa başarıyla yüklendi mi kontrol et
                const pageTitle = await page.title();
                if (pageTitle.includes('Offline') || pageTitle.includes('Error')) {
                    throw new Error('Sayfa offline veya hata verdi');
                }
                
                break; // Başarılı, döngüden çıkS
                
            } catch (error) {
                retryCount++;
                console.log(`Ürün ${productNumber} için deneme ${retryCount}/${maxRetries} başarısız:`, error.message);
                
                if (retryCount >= maxRetries) {
                    throw error;
                }
                
                // Daha uzun bekleme süresi
                await new Promise(resolve => setTimeout(resolve, 10000));
            }
        }

        // Tüm ürün verilerini çek
        const productData = await page.evaluate(() => {
            const data = {};
            
            // Debug: Tüm h3 başlıklarını listele
            const allH3s = document.querySelectorAll('h3');
            console.log('Tüm H3 başlıkları:');
            allH3s.forEach((h3, index) => {
                console.log(`${index}: ${h3.textContent} - Class: ${h3.className}`);
            });
            
            // Ürün adı
            const productName = document.querySelector('h1')?.textContent?.trim() || 
                               document.querySelector('[data-testid="product-title"]')?.textContent?.trim() ||
                               document.querySelector('.product-title')?.textContent?.trim();
            if (productName) data.product_name = productName;
            
            // Ürün kodu
            const productCode = document.querySelector('[data-testid="product-code"]')?.textContent?.trim() ||
                               document.querySelector('.product-code')?.textContent?.trim();
            if (productCode) data.product_code = productCode;
            
            // Fiyat bilgisi
            const price = document.querySelector('[data-testid="price"]')?.textContent?.trim() ||
                         document.querySelector('.price')?.textContent?.trim() ||
                         document.querySelector('.product-price')?.textContent?.trim();
            if (price) data.price = price;
            
            // Stok durumu
            const stockStatus = document.querySelector('[data-testid="stock-status"]')?.textContent?.trim() ||
                               document.querySelector('.stock-status')?.textContent?.trim() ||
                               document.querySelector('.availability')?.textContent?.trim();
            if (stockStatus) data.stock_status = stockStatus;
            
            
            // About this item bölümündeki detaylı veriler - daha genel arama
            let aboutSection = null;
            
            // Önce spesifik class ile ara
            let aboutHeading = document.querySelector('h3.MuiTypography-root.jss2426.MuiTypography-h3');
            
            // Bulamazsa tüm h3'lerde ara
            if (!aboutHeading) {
                const allH3s = document.querySelectorAll('h3');
                for (let h3 of allH3s) {
                    if (h3.textContent.includes('About This Item') || h3.textContent.includes('About this item')) {
                        aboutHeading = h3;
                        break;
                    }
                }
            }
            
            console.log('About heading:', aboutHeading?.textContent);
            
            if (aboutHeading) {
                // About This Item başlığının sonraki sibling elementlerini bul
                let currentElement = aboutHeading.nextElementSibling;
                while (currentElement) {
                    // Eğer bir sonraki h3 başlığı varsa dur
                    if (currentElement.tagName === 'H3' || currentElement.tagName === 'H2') {
                        break;
                    }
                    // Grid container'ı bul - daha geniş arama
                    if (currentElement.classList.contains('jss1174') || 
                        currentElement.classList.contains('MuiGrid-container') ||
                        currentElement.querySelector('.jss1174') ||
                        currentElement.querySelector('.MuiGrid-container')) {
                        aboutSection = currentElement.querySelector('.jss1174') || 
                                     currentElement.querySelector('.MuiGrid-container') || 
                                     currentElement;
                        break;
                    }
                    currentElement = currentElement.nextElementSibling;
                }
            }
            
            console.log('About section bulundu:', !!aboutSection);
            
            if (aboutSection) {
                console.log('About section HTML:', aboutSection.outerHTML.substring(0, 500));
                
                // Example.html'deki yapıya göre veri çek
                const rows = aboutSection.querySelectorAll('.jss1175.MuiGrid-item');
                console.log('JSS1175 rows bulundu:', rows.length);
                
                // Alternatif row selektörleri de dene
                const altRows = aboutSection.querySelectorAll('.MuiGrid-item');
                console.log('Tüm MuiGrid-item bulundu:', altRows.length);
                
                rows.forEach(row => {
                    const labelElement = row.querySelector('.jss1176.MuiTypography-caption');
                    const valueElement = row.querySelector('.jss1177.MuiTypography-caption');
                    
                    if (labelElement && valueElement) {
                        const label = labelElement.textContent.trim();
                        
                        // Değeri çek - span içindeki veya direkt text
                        let value = '';
                        const valueSpan = valueElement.querySelector('span');
                        if (valueSpan) {
                            value = valueSpan.textContent.trim();
                        } else {
                            value = valueElement.textContent.trim();
                        }
                        
                        if (label && value) {
                            // Label'ı temizle ve key olarak kullan
                            const cleanLabel = label.replace(/[:\s]+/g, '_').toLowerCase();
                            data[cleanLabel] = value;
                        }
                    }
                });
                
                // Alternatif selektörler de dene
                const alternativeRows = aboutSection.querySelectorAll('.MuiGrid-item');
                alternativeRows.forEach(row => {
                    const captionElements = row.querySelectorAll('.MuiTypography-caption');
                    if (captionElements.length >= 2) {
                        const label = captionElements[0]?.textContent?.trim();
                        const valueElement = captionElements[1];
                        let value = '';
                        
                        if (valueElement) {
                            const valueSpan = valueElement.querySelector('span');
                            value = valueSpan ? valueSpan.textContent.trim() : valueElement.textContent.trim();
                        }
                        
                        if (label && value && label !== value) {
                            const cleanLabel = label.replace(/[:\s]+/g, '_').toLowerCase();
                            if (!data[cleanLabel]) { // Sadece daha önce eklenmemişse ekle
                                data[cleanLabel] = value;
                            }
                        }
                    }
                });
            }
            
            // Tüm sayfada genel arama yap
            const allLabels = document.querySelectorAll('strong, b, .label, .field-label, dt, .MuiTypography-caption');
            const allValues = document.querySelectorAll('span, .value, .field-value, dd, .MuiTypography-caption');
            
            // Yaygın kimya verilerini ara
            const chemistryFields = [
                'cas number', 'cas no', 'cas', 'molecular weight', 'mw', 'formula', 'linear formula',
                'beilstein', 'mdl number', 'mdl', 'ec number', 'ec index', 'unspsc', 'nacres'
            ];
            
            allLabels.forEach(label => {
                const labelText = label.textContent?.trim().toLowerCase();
                if (chemistryFields.some(field => labelText.includes(field))) {
                    const valueElement = label.parentElement?.querySelector('span, .value, .field-value') ||
                                       label.nextElementSibling;
                    const valueText = valueElement?.textContent?.trim();
                    
                    if (valueText) {
                        const cleanLabel = labelText.replace(/[:\s]+/g, '_');
                        data[cleanLabel] = valueText;
                    }
                }
            });
            
            return data;
        });

        // Ürün numarasını da ekle
        productData.product_number = productNumber;
        
        console.log(`Ürün ${productNumber} verisi çekildi:`, productData);
        return productData;
        
    } catch (error) {
        console.error(`Ürün ${productNumber} için hata:`, error.message);
        return {
            product_number: productNumber,
            error: error.message,
            data: null
        };
    }
}

// Ana fonksiyon
(async () => {
    // Tarayıcıyı başlat
    const browser = await puppeteer.launch({
        headless: false,
        args: [
            '--no-sandbox', 
            '--disable-setuid-sandbox',
            '--disable-blink-features=AutomationControlled',
            '--disable-features=VizDisplayCompositor'
        ]
    });
    
    // Yeni bir sayfa oluştur
    const page = await browser.newPage();
    await page.setViewport({width: 1366, height: 768});
    
    // Bot tespitini önlemek için ayarlar
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    
    // Puppeteer'ın otomatik tespit edilmesini önle
    await page.evaluateOnNewDocument(() => {
        Object.defineProperty(navigator, 'webdriver', {
            get: () => undefined,
        });
    });
    
    // Extra headers
    await page.setExtraHTTPHeaders({
        'Accept-Language': 'tr-TR,tr;q=0.9,en;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Upgrade-Insecure-Requests': '1',
        'Cache-Control': 'max-age=0'
    });
    
    try {
        // Dizideki her eleman için işlem yap
        for (let i = 0; i < dizi.length; i++) {
            const productNumber = dizi[i];
            console.log(`\n${i + 1}/${dizi.length} - Ürün işleniyor: ${productNumber}`);
            
            // Veri çek
            const productData = await scrapeProductData(page, productNumber);
            allProducts.push(productData);
            
            // Her ürün arasında uzun bekleme (bot tespitini önlemek için)
            await new Promise(resolve => setTimeout(resolve, 8000));
        }
        
        // JSON dosyasına kaydet
        const jsonData = {
            scraped_at: new Date().toISOString(),
            total_products: allProducts.length,
            products: allProducts
        };
        
        const filename = `products_data_${new Date().toISOString().split('T')[0]}.json`;
        fs.writeFileSync(filename, JSON.stringify(jsonData, null, 2), 'utf8');
        
        console.log(`\n✅ Tüm veriler başarıyla ${filename} dosyasına kaydedildi!`);
        console.log(`📊 Toplam ${allProducts.length} ürün işlendi.`);
        
    } catch (error) {
        console.error('Genel hata:', error);
    } finally {
        // Tarayıcıyı kapat
        await browser.close();
    }
})();




