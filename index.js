
const puppeteer = require('puppeteer');
const fs = require('fs');

dizi = [
    "100012",
    "100013",
    "100014",
    "100020",
    "100029",
    "100030",
    "100056",
    "100063",
    "100103",
    "100132",
    "100136",
    "100165",
    "100201",
    "100206",
    "100244",
    "100255",
    "100264",
    "100291",
    "100304",
    "100314",
    "100317",
    "100318",
    "100319",
    "100337",
    "100353",
    "100354",
    "100366",
    "100441",
    "100443",
    "100452",
    "100456",
    "100468",
    "100492",
    "100495",
    "100518",
    "100519",
    "100524",
    "100532",
    "100540",
    "100546",
    "100563",
    "100573",
    "100582",
    "100682",
    "100713",
    "100729",
    "100731",
    "100748",
    "100795",
    "100804",
    "100807",
    "100868",
    "100921",
    "100949",
    "100964",
    "100979",
    "100981",
    "100983",
    "100987",
    "100988",
    "100995",
    "100996",
    "101040",
    "101047",
    "101056",
    "101086",
    "101091",
    "101097",
    "101115",
    "101116",
    "101126",
    "101145",
    "101154",
    "101164",
    "101180",
    "101182",
    "101190",
    "101192",
    "101200",
    "101207",
    "101211",
    "101213",
    "101217",
    "101226",
    "101252",
    "101261",
    "101322",
    "101323",
    "101340",
    "101369",
    "101383",
    "101408",
    "101424",
    "101509",
    "101512",
    "101514",
    "101518",
    "101534",
    "101542",
    "101557",
    "101582",
    "101691",
    "101717",
    "101719",
    "101729",
    "101735",
    "101774",
    "101775",
    "101843",
    "101990",
    "102003",
    "102027",
    "102047",
    "102066",
    "102121",
    "102161",
    "102183",
    "102214",
    "102378",
    "102379",
    "102382",
    "102400",
    "102424",
    "102431",
    "102439",
    "102444",
    "102445",
    "102498",
    "102536",
    "102539",
    "102693",
    "102703",
    "102710",
    "102733",
    "102753",
    "102790",
    "102817",
    "102827",
    "102832",
    "102839",
    "102888",
    "102952",
    "103025",
    "103026",
    "103028",
    "103034",
    "103053",
    "103058",
    "103062",
    "103087",
    "103091",
    "103115",
    "103170",
    "103776",
    "103819",
    "103883",
    "103943",
    "103965",
    "104002",
    "104003",
    "104007",
    "104057",
    "104201",
    "104302",
    "104335",
    "104350",
    "104360",
    "104365",
    "104367",
    "104368",
    "104371",
    "104379",
    "104390",
    "104391",
    "104410",
    "104417",
    "104419",
    "104420",
    "104421",
    "104428",
    "104439",
    "104480",
    "104481",
    "104594",
    "104595",
    "104603",
    "104616",
    "104699",
    "104718",
    "104724",
    "104727",
    "104761",
    "104817",
    "104854",
    "104864",
    "104873",
    "104874",
    "104905",
    "104907",
    "104912",
    "104928",
    "104936",
    "104944",
    "104952",
    "104971",
    "104973",
    "104982",
    "104984",
    "104994",
    "105012",
    "105033",
    "105043",
    "105051",
    "105057",
    "105073",
    "105091",
    "105099",
    "105104",
    "105124",
    "105125",
    "105153",
    "105174",
    "105206",
    "105326",
    "105341",
    "105426",
    "105432",
    "105544",
    "105553",
    "105554",
    "105587",
    "105590",
    "105614",
    "105621",
    "105679",
    "105715",
    "105721",
    "105812",
    "105819",
    "105833",
    "105853",
    "105886",
    "105982",
    "106007",
    "106008",
    "106009",
    "106018",
    "106035",
    "106044",
    "106050",
    "106054",
    "106067",
    "106076",
    "106130",
    "106161",
    "106237",
    "106260",
    "106267",
    "106268",
    "106323",
    "106329",
    "106345",
    "106346",
    "106371",
    "106392",
    "106400",
    "106404",
    "106448",
    "106462",
    "106469",
    "106498",
    "106505",
    "106512",
    "106516",
    "106521",
    "106528",
    "106529",
    "106541",
    "106557",
    "106560",
    "106563",
    "106564",
    "106578",
    "106579",
    "106580",
    "106586",
    "106597",
    "106609",
    "106649",
    "106657",
    "106673",
    "106717",
    "106721",
    "106727",
    "106762",
    "106888",
    "106999",
    "107160",
    "107176",
    "107177",
    "107209",
    "107225",
    "107227",
    "107233",
    "107241",
    "107375",
    "107462",
    "107536",
    "107593",
    "107651",
    "107711",
    "107714",
    "107730",
    "107731",
    "107739",
    "107743",
    "107815",
    "107838",
    "107872",
    "107961",
    "107979",
    "108039",
    "108047",
    "108087",
    "108092",
    "108101",
    "108114",
    "108121",
    "108122",
    "108170",
    "108176",
    "108180",
    "108262",
    "108297",
    "108323",
    "108325",
    "108337",
    "108342",
    "108382",
    "108387",
    "108389",
    "108418",
    "108421",
    "108426",
    "108430",
    "108431",
    "108446",
    "108487",
    "108597",
    "108600",
    "108603",
    "108677",
    "108774",
    "108789",
    "108802",
    "108816",
    "108849",
    "108883",
    "109001",
    "109028",
    "109033",
    "109057",
    "109058",
    "109060",
    "109065",
    "109074",
    "109081",
    "109092",
    "109114",
    "109115",
    "109136",
    "109137",
    "109139",
    "109141",
    "109147",
    "109161",
    "109163",
    "109175",
    "109204",
    "109215",
    "109218",
    "109253",
    "109255",
    "109257",
    "109261",
    "109272",
    "109278",
    "109325",
    "109435",
    "109438",
    "109439",
    "109461",
    "109521",
    "109526",
    "109527",
    "109531",
    "109533",
    "109535",
    "109540",
    "109621",
    "109623",
    "109629",
    "109630",
    "109634",
    "109684",
    "109731",
    "109844",
    "109884",
    "109887",
    "109900",
    "109909",
    "109910",
    "109928",
    "109950",
    "109956",
    "109959",
    "109970",
    "109971",
    "109973",
    "109981",
    "109984",
    "109990",
    "109992",
    "110001",
    "110007",
    "110011",
    "110013",
    "110020",
    "110025",
    "110084",
    "110784",
    "110958",
    "110972",
    "110983",
    "111104",
    "111132",
    "111374",
    "111799",
    "111885",
    "111962",
    "112080",
    "112130",
    "112144",
    "112422",
    "112553",
    "113358",
    "113741",
    "114660",
    "114670",
    "115333",
    "115348",
    "115440",
    "115444",
    "115480",
    "116743",
    "117920",
    "117924",
    "117925",
    "118303",
    "118304",
    "118305",
    "118306",
    "118307",
    "119500",
    "119507",
    "119533",
    "119770",
    "119773",
    "119774",
    "119776",
    "119777",
    "119778",
    "119779",
    "119781",
    "119785",
    "119786",
    "119788",
    "119789",
    "119792",
    "119796",
    "119797",
    "119806",
    "119812",
    "119814",
    "119898",
    "170204",
    "170216",
    "170223",
    "170226",
    "170227",
    "170230",
    "170236",
    "170238",
    "170242",
    "170301",
    "170302",
    "170303",
    "170307",
    "170308",
    "170309",
    "170312",
    "170313",
    "170314",
    "170326",
    "170328",
    "170331",
    "170332",
    "170333",
    "170336",
    "170340",
    "170342",
    "170350",
    "170353",
    "170362",
    "170363",
    "170369",
    "188002",
    "188005",
    "188006",
    "188010",
    "188015",
    "188052",
    "480531",
    "800004",
    "800023",
    "800133",
    "800605",
    "800653",
    "800830",
    "800947",
    "801081",
    "801641",
    "801663",
    "801756",
    "801791",
    "801801",
    "801804",
    "802100",
    "803057",
    "803116",
    "803235",
    "803238",
    "803541",
    "803646",
    "803945",
    "804012",
    "804604",
    "804771",
    "805740",
    "806356",
    "806373",
    "807485",
    "807491",
    "807492",
    "807500",
    "808245",
    "808260",
    "808352",
    "808697",
    "809691",
    "809692",
    "814464",
    "818247",
    "818707",
    "818709",
    "818712",
    "818731",
    "818757",
    "818759",
    "818831",
    "820528",
    "820603",
    "820931",
    "822050",
    "822147",
    "822184",
    "822187",
    "822264",
    "822289",
    "822291",
    "822333",
    "822335",
    "822336",
    "822338",
    "842649"
]


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

                // Properties bölümündeki "Show More" butonunu tıkla (eğer varsa)
                try {
                    const showMoreButton = await page.$('#properties-expansion-toggle');
                    if (showMoreButton) {
                        const isExpanded = await page.evaluate(button => {
                            return button.getAttribute('aria-expanded') === 'true';
                        }, showMoreButton);

                        if (!isExpanded) {
                            await showMoreButton.click();
                            await new Promise(resolve => setTimeout(resolve, 1000)); // Açılmasını bekle
                            console.log(`Ürün ${productNumber} için "Show More" butonuna tıklandı`);
                        }
                    }
                } catch (error) {
                    console.log(`Ürün ${productNumber} için "Show More" butonu bulunamadı veya tıklanamadı:`, error.message);
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
            const data = { about: {}, properties: {} };

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
                            data.about[cleanLabel] = value;
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
                            if (!data.about[cleanLabel]) { // Sadece daha önce eklenmemişse ekle
                                data.about[cleanLabel] = value;
                            }
                        }
                    }
                });
            }

            // Properties bölümündeki tabloyu işle
            // Önce "Properties" başlığını bul (h2, h3, veya başka bir başlık)
            let propertiesHeading = null;
            const allHeadings = document.querySelectorAll('h1, h2, h3, h4, [class*="title"], [class*="heading"]');
            for (let heading of allHeadings) {
                const headingText = heading.textContent.trim().toLowerCase();
                if (headingText.includes('properties') || headingText.includes('property')) {
                    propertiesHeading = heading;
                    break;
                }
            }

            // Properties container'ını bul - birden fazla yöntemle
            let propertiesContainer = null;

            // Yöntem 1: ID ile ara (tüm id="pdp-properties--table" elementlerini bul)
            const propertiesByIds = document.querySelectorAll('[id="pdp-properties--table"]');
            if (propertiesByIds.length > 0) {
                // İlk elementin parent container'ını bul
                propertiesContainer = propertiesByIds[0].closest('div') || propertiesByIds[0].parentElement;
                console.log('Properties container ID ile bulundu, toplam property row:', propertiesByIds.length);
            }

            // Yöntem 2: Properties başlığının altındaki container'ı bul
            if (!propertiesContainer && propertiesHeading) {
                let currentElement = propertiesHeading.nextElementSibling;
                let depth = 0;
                while (currentElement && depth < 20) {
                    // Container içinde MuiGrid-container ve property row'ları var mı kontrol et
                    const gridContainers = currentElement.querySelectorAll('.MuiGrid-container');
                    if (gridContainers.length > 0) {
                        // İlk grid container'da property yapısı var mı kontrol et
                        const firstGrid = gridContainers[0];
                        const hasPropertyName = firstGrid.querySelector('h3.MuiTypography-caption, h3[class*="caption"]');
                        const hasPropertyValue = firstGrid.querySelector('p.MuiTypography-body2, p[class*="body2"]');
                        if (hasPropertyName && hasPropertyValue) {
                            propertiesContainer = currentElement;
                            break;
                        }
                    }
                    currentElement = currentElement.nextElementSibling;
                    depth++;
                }
            }

            // Yöntem 3: Tüm sayfada properties tablosunu ara
            if (!propertiesContainer) {
                const allGridContainers = document.querySelectorAll('.MuiGrid-container');
                for (let gridContainer of allGridContainers) {
                    // İlk iki grid item'ı kontrol et - biri property name, diğeri value olmalı
                    const gridItems = gridContainer.querySelectorAll('.MuiGrid-item');
                    if (gridItems.length >= 2) {
                        const firstItem = gridItems[0];
                        const secondItem = gridItems[1];
                        const hasName = firstItem.querySelector('h3.MuiTypography-caption, h3[class*="caption"], h3');
                        const hasValue = secondItem.querySelector('p.MuiTypography-body2, p[class*="body2"], p');
                        if (hasName && hasValue) {
                            propertiesContainer = gridContainer.closest('div') || gridContainer.parentElement;
                            break;
                        }
                    }
                }
            }

            console.log('Properties container bulundu:', !!propertiesContainer);

            // Eğer ID ile property row'ları bulunduysa, onları direkt kullan
            let propertyRows = [];
            if (propertiesByIds.length > 0) {
                propertyRows = Array.from(propertiesByIds);
                console.log('Properties row\'ları ID ile bulundu:', propertyRows.length);
            } else if (propertiesContainer) {
                // Tüm property row'larını bul - hem dinamik class'lar hem de genel selector'lar
                propertyRows = Array.from(propertiesContainer.querySelectorAll('.MuiGrid-container'));
                console.log('Toplam MuiGrid-container bulundu:', propertyRows.length);
            }

            if (propertyRows.length > 0) {
                let validRows = 0;
                propertyRows.forEach(row => {
                    // Property name: İlk grid item içinde h3
                    const gridItems = row.querySelectorAll('.MuiGrid-item');
                    const nameContainer = gridItems[0]; // İlk grid item
                    const propertyNameElement = nameContainer ? (
                        nameContainer.querySelector('h3 span') ||
                        nameContainer.querySelector('h3.MuiTypography-caption span') ||
                        nameContainer.querySelector('h3[class*="caption"] span') ||
                        nameContainer.querySelector('h3')
                    ) : null;

                    // Property value: İkinci grid item içindeki p tag'i
                    const valueContainer = gridItems[1]; // İkinci grid item
                    const propertyValueElement = valueContainer ? (
                        valueContainer.querySelector('p.MuiTypography-body2') ||
                        valueContainer.querySelector('p[class*="body2"]') ||
                        valueContainer.querySelector('p')
                    ) : null;

                    if (propertyNameElement && propertyValueElement) {
                        const propertyName = propertyNameElement.textContent.trim();

                        // Değeri çek - tüm text içeriğini al
                        let propertyValue = '';

                        // Önce link varsa link text'ini al
                        const links = propertyValueElement.querySelectorAll('a');
                        if (links.length > 0) {
                            const linkTexts = Array.from(links).map(link => link.textContent.trim()).filter(t => t);
                            if (linkTexts.length > 0) {
                                propertyValue = linkTexts.join(', ');
                            }
                        }

                        // Eğer link yoksa veya boşsa, tüm text içeriğini al
                        if (!propertyValue) {
                            propertyValue = propertyValueElement.textContent || '';
                        }

                        // HTML tag'lerini kaldır ve temizle
                        if (!propertyValue && propertyValueElement.innerHTML) {
                            // Geçici olarak innerHTML'den text çıkar
                            const tempDiv = document.createElement('div');
                            tempDiv.innerHTML = propertyValueElement.innerHTML;
                            propertyValue = tempDiv.textContent || tempDiv.innerText || '';
                        }

                        // HTML entity'leri ve boşlukları temizle
                        propertyValue = propertyValue
                            .replace(/&nbsp;/g, ' ')
                            .replace(/\s+/g, ' ')
                            .trim();

                        if (propertyName && propertyValue && propertyName.length > 0 && propertyValue.length > 0) {
                            data.properties[propertyName] = propertyValue;
                            validRows++;
                        }
                    }
                });

                console.log('Properties extracted:', validRows, 'valid rows');
                console.log('Properties keys:', Object.keys(data.properties));
            } else {
                console.log('Properties container bulunamadı - tüm sayfada arama yapılıyor...');

                // Son çare: Tüm sayfada pattern eşleştirme
                const allGridContainers = document.querySelectorAll('.MuiGrid-container');
                allGridContainers.forEach(row => {
                    const gridItems = row.querySelectorAll('.MuiGrid-item');
                    if (gridItems.length === 2) {
                        const nameEl = gridItems[0].querySelector('h3');
                        const valueEl = gridItems[1].querySelector('p');
                        if (nameEl && valueEl) {
                            const name = nameEl.textContent.trim();
                            const value = valueEl.textContent.trim()
                                .replace(/&nbsp;/g, ' ')
                                .replace(/\s+/g, ' ')
                                .trim();
                            if (name && value && name.length > 0 && value.length > 0) {
                                // Sadece properties benzeri içerikse ekle (kısa isimler genelde property)
                                if (name.length < 50) {
                                    data.properties[name] = value;
                                }
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
                        if (!data.about[cleanLabel] && !data.properties[cleanLabel]) {
                            data[cleanLabel] = valueText;
                        }
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
    // Headless modunu kontrol et (komut satırı argümanı veya environment variable)
    // Varsayılan olarak headless mod açık
    const isHeadlessArg = process.argv.includes('--headless') || process.argv.includes('-h');
    const isHeadlessEnv = process.env.HEADLESS === 'true' || process.env.HEADLESS === '1';
    const isHeadlessDisabled = process.argv.includes('--no-headless') || process.env.HEADLESS === 'false' || process.env.HEADLESS === '0';

    // Eğer açıkça devre dışı bırakılmadıysa, headless modu açık (varsayılan: true)
    let headlessMode = true; // Varsayılan headless mod
    if (isHeadlessDisabled) {
        headlessMode = false;
    } else if (isHeadlessArg || isHeadlessEnv) {
        headlessMode = true;
    }

    console.log(`🚀 Tarayıcı ${headlessMode ? 'headless' : 'normal'} modda başlatılıyor...`);

    // Tarayıcıyı başlat - Puppeteer'ın yeni headless modunu kullan
    const browser = await puppeteer.launch({
        headless: headlessMode === true ? 'new' : false, // Yeni headless mod
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-blink-features=AutomationControlled',
            '--disable-features=VizDisplayCompositor',
            '--disable-dev-shm-usage',
            '--disable-gpu'
        ]
    });

    // Yeni bir sayfa oluştur
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768 });

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




