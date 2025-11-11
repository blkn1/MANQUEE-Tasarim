// YAT KİRALAMA SİTESİ - ANA JAVASCRIPT DOSYASI

// ========================================
// MOBILE MENU TOGGLE
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            mobileNav.classList.toggle('active');
        });
    }
});

// ========================================
// GLOBAL DATA & CONFIGURATION
// ========================================

const siteData = {
    boats: [
        {
            id: 1,
            name: "Princess 20M",
            location: "Bodrum",
            type: "Motoryat",
            price: 12500,
            capacity: 12,
            cabins: 3,
            length: 20,
            year: 2020,
            images: [
                "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800",
                "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800",
                "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800"
            ],
            amenities: ["Klima", "Jeneratör", "Wi-Fi", "Müzik Sistemi", "Su Sporları"],
            tags: ["Lüks", "Aileler için", "Kurumsal"],
            rating: 4.8,
            description: "Bodrum çıkışlı günlük ve çok günlük turlar için ideal, modern 20 metre motoryat."
        },
        {
            id: 2,
            name: "Azimut 18M",
            location: "İstanbul",
            type: "Motoryat",
            price: 10500,
            capacity: 10,
            cabins: 2,
            length: 18,
            year: 2019,
            images: [
                "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800",
                "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800"
            ],
            amenities: ["Klima", "Gölgelik", "Müzik Sistemi", "Balık Tutma"],
            tags: ["Çiftler için", "Popüler"],
            rating: 4.7,
            description: "İstanbul Boğazı'nda unutulmaz bir yolculuk için ideal."
        },
        {
            id: 3,
            name: "Sunseeker 22M",
            location: "Bodrum",
            type: "Motoryat",
            price: 15000,
            capacity: 15,
            cabins: 4,
            length: 22,
            year: 2021,
            images: [
                "https://images.unsplash.com/photo-1621277224630-81d9af65e40f?w=800",
                "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800"
            ],
            amenities: ["Klima", "Jeneratör", "Wi-Fi", "Jakuzi", "Su Sporları", "Profesyonel Mutfak"],
            tags: ["VIP", "Lüks", "Evlilik Teklifi"],
            rating: 4.9,
            description: "En lüks donanımlı motoryatımız. Özel günler için ideal."
        },
        {
            id: 4,
            name: "Gulet 25M",
            location: "Bodrum",
            type: "Gulet",
            price: 8500,
            capacity: 20,
            cabins: 6,
            length: 25,
            year: 2018,
            images: [
                "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
                "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800"
            ],
            amenities: ["Klima", "Gölgelik", "Müzik Sistemi", "Su Sporları", "Geniş Güverte"],
            tags: ["Kalabalık Grup", "Aileler için", "Ekonomik"],
            rating: 4.6,
            description: "Geniş aileler ve arkadaş grupları için ideal gulet."
        },
        {
            id: 5,
            name: "Pershing 16M",
            location: "İstanbul",
            type: "Motoryat",
            price: 9500,
            capacity: 8,
            cabins: 2,
            length: 16,
            year: 2020,
            images: [
                "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800",
                "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800"
            ],
            amenities: ["Klima", "Wi-Fi", "Müzik Sistemi", "Hızlı Yat"],
            tags: ["Sportif", "Çiftler için"],
            rating: 4.7,
            description: "Hızlı ve şık tasarımıyla dikkat çeken motoryat."
        },
        {
            id: 6,
            name: "Ferretti 24M",
            location: "İstanbul",
            type: "Motoryat",
            price: 18000,
            capacity: 12,
            cabins: 4,
            length: 24,
            year: 2022,
            images: [
                "https://images.unsplash.com/photo-1621277224630-81d9af65e40f?w=800",
                "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800"
            ],
            amenities: ["Klima", "Jeneratör", "Wi-Fi", "Jakuzi", "Cinema Room", "Profesyonel Mutfak"],
            tags: ["VIP", "Lüks", "Kurumsal"],
            rating: 5.0,
            description: "İstanbul Boğazı'nın en lüks yatlarından biri."
        }
    ],
    
    blogs: [
        {
            id: 1,
            title: "İstanbul'da Günlük Yat Kiralama Rehberi",
            excerpt: "Boğaz'da unutulmaz bir gün geçirmek için bilmeniz gereken her şey.",
            date: "2024-11-01",
            location: "İstanbul",
            image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800",
            content: "İstanbul Boğazı'nda yat kiralama deneyimi..."
        },
        {
            id: 2,
            title: "Bodrum'da 3 Günlük Tekne Turu Planlama",
            excerpt: "Bodrum koylarını keşfetmek için mükemmel bir rota.",
            date: "2024-10-28",
            location: "Bodrum",
            image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
            content: "Bodrum'da tekne turu planlarken..."
        },
        {
            id: 3,
            title: "Teknede Evlilik Teklifi: 10 Altın İpucu",
            excerpt: "Denizde romantik bir evlilik teklifi için önerilerimiz.",
            date: "2024-10-25",
            location: "Genel",
            image: "https://images.unsplash.com/photo-1519167758481-83f29da8c2b9?w=800",
            content: "Evlilik teklifi için tekne kiralama..."
        },
        {
            id: 4,
            title: "Yat Kiralama Fiyatları Nelere Göre Değişir?",
            excerpt: "Fiyatı etkileyen faktörleri öğrenin ve bütçenizi planlayın.",
            date: "2024-10-20",
            location: "Genel",
            image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800",
            content: "Yat kiralama fiyatları..."
        }
    ],
    
    testimonials: [
        {
            author: "Ayşe Y.",
            rating: 5,
            text: "Evlilik teklifimizi tekne üzerinde yaptık, her şey kusursuzdu. Ekip çok profesyoneldi ve organizasyon mükemmeldi.",
            date: "2024-10-15"
        },
        {
            author: "Mehmet K.",
            rating: 5,
            text: "Bodrum turumuz harikaydı! Tekne çok temiz ve modern. Kaptan bey çok yardımcı oldu. Kesinlikle tekrar kiralayacağız.",
            date: "2024-10-10"
        },
        {
            author: "Zeynep A.",
            rating: 4,
            text: "Ailecek harika bir gün geçirdik. Çocuklar çok eğlendi. Fiyat performans açısından çok iyi.",
            date: "2024-10-05"
        },
        {
            author: "Can B.",
            rating: 5,
            text: "Şirket ekip gezisi için kiraladık. 15 kişi rahatça sığdık. Organizasyon ve hizmet 10 üzerinden 10!",
            date: "2024-09-28"
        }
    ],
    
    extras: [
        { id: 1, name: "Drone Çekimi", description: "Profesyonel drone ile anılarınızı ölümsüzleştirin", price: 1500 },
        { id: 2, name: "Pasta & Süsleme", description: "Özel günleriniz için pasta ve süsleme hizmeti", price: 850 },
        { id: 3, name: "VIP Transfer", description: "Marina'ya özel araçla transfer", price: 1200 },
        { id: 4, name: "Profesyonel Fotoğrafçı", description: "Tüm gün fotoğraf çekimi hizmeti", price: 2000 },
        { id: 5, name: "Özel Menü", description: "Michelin yıldızlı şef menüsü", price: 3500 },
        { id: 6, name: "Su Sporları Paketi", description: "Jet ski, ringo, banana ile sınırsız eğlence", price: 2500 }
    ]
};

// User session data
let currentUser = null;
let userReservations = [];
let searchFilters = {
    location: '',
    startDate: '',
    endDate: '',
    type: '',
    minPrice: 0,
    maxPrice: 50000,
    minCapacity: 1,
    amenities: []
};

// ========================================
// UTILITY FUNCTIONS
// ========================================

function formatPrice(price) {
    return price.toLocaleString('tr-TR') + ' ₺';
}

function formatDate(dateString) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
}

function calculateDays(startDate, endDate) {
    if (!startDate || !endDate) return 1;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : '#dc3545'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ========================================
// HEADER & NAVIGATION
// ========================================

function initHeader() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }
    
    // Update header based on login status
    updateHeaderAuth();
}

function updateHeaderAuth() {
    currentUser = getFromLocalStorage('currentUser');
    const headerActions = document.querySelector('.header-actions');
    
    if (currentUser && headerActions) {
        const loginBtn = headerActions.querySelector('.btn-secondary');
        if (loginBtn) {
            loginBtn.textContent = '👤 Hesabım';
            loginBtn.onclick = () => window.location.href = 'hesap.html';
        }
    }
}

// ========================================
// SEARCH FUNCTIONALITY
// ========================================

function initSearchBar() {
    const searchForm = document.querySelector('.search-form');
    if (!searchForm) return;
    
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        performSearch();
    });
    
    // Set minimum date to today
    const dateInputs = searchForm.querySelectorAll('input[type="date"]');
    const today = new Date().toISOString().split('T')[0];
    dateInputs.forEach(input => {
        input.min = today;
    });
}

function performSearch() {
    const location = document.getElementById('search-location')?.value;
    const startDate = document.getElementById('search-start-date')?.value;
    const endDate = document.getElementById('search-end-date')?.value;
    
    if (!location) {
        showNotification('Lütfen lokasyon seçin', 'error');
        return;
    }
    
    if (!startDate) {
        showNotification('Lütfen başlangıç tarihi seçin', 'error');
        return;
    }
    
    // Save search params and redirect
    const params = new URLSearchParams({
        location,
        startDate,
        endDate: endDate || startDate
    });
    
    window.location.href = `arama.html?${params.toString()}`;
}

function getSearchParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        location: params.get('location') || '',
        startDate: params.get('startDate') || '',
        endDate: params.get('endDate') || '',
        type: params.get('type') || '',
        minPrice: parseInt(params.get('minPrice')) || 0,
        maxPrice: parseInt(params.get('maxPrice')) || 50000,
        minCapacity: parseInt(params.get('minCapacity')) || 1
    };
}

// ========================================
// FILTER FUNCTIONALITY
// ========================================

function initFilters() {
    const filterForm = document.querySelector('.filters-sidebar');
    if (!filterForm) return;
    
    // Price range filter
    const priceMin = document.getElementById('price-min');
    const priceMax = document.getElementById('price-max');
    
    if (priceMin && priceMax) {
        priceMin.addEventListener('input', applyFilters);
        priceMax.addEventListener('input', applyFilters);
    }
    
    // Checkbox filters
    const checkboxes = filterForm.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
    
    // Capacity filter
    const capacityInputs = filterForm.querySelectorAll('input[name="capacity"]');
    capacityInputs.forEach(input => {
        input.addEventListener('change', applyFilters);
    });
}

function applyFilters() {
    const params = getSearchParams();
    
    // Get filter values
    const priceMin = document.getElementById('price-min')?.value || 0;
    const priceMax = document.getElementById('price-max')?.value || 50000;
    
    const selectedTypes = Array.from(document.querySelectorAll('input[name="boat-type"]:checked'))
        .map(cb => cb.value);
    
    const selectedCapacity = document.querySelector('input[name="capacity"]:checked')?.value;
    
    const selectedAmenities = Array.from(document.querySelectorAll('input[name="amenity"]:checked'))
        .map(cb => cb.value);
    
    // Filter boats
    let filtered = siteData.boats.filter(boat => {
        // Location filter
        if (params.location && boat.location !== params.location) return false;
        
        // Type filter
        if (selectedTypes.length > 0 && !selectedTypes.includes(boat.type)) return false;
        
        // Price filter
        if (boat.price < priceMin || boat.price > priceMax) return false;
        
        // Capacity filter
        if (selectedCapacity) {
            const minCap = parseInt(selectedCapacity);
            if (boat.capacity < minCap) return false;
        }
        
        // Amenities filter
        if (selectedAmenities.length > 0) {
            const hasAllAmenities = selectedAmenities.every(amenity => 
                boat.amenities.some(a => a.toLowerCase().includes(amenity.toLowerCase()))
            );
            if (!hasAllAmenities) return false;
        }
        
        return true;
    });
    
    displaySearchResults(filtered, params);
}

// ========================================
// BOAT LISTING & DISPLAY
// ========================================

function displayFeaturedBoats() {
    const container = document.querySelector('.boats-grid');
    if (!container) return;
    
    const featured = siteData.boats.slice(0, 6);
    container.innerHTML = featured.map(boat => createBoatCard(boat)).join('');
}

function createBoatCard(boat) {
    return `
        <div class="boat-card" onclick="viewBoatDetail(${boat.id})">
            <div class="boat-image">
                <img src="${boat.images[0]}" alt="${boat.name}">
                <span class="boat-badge">${boat.tags[0]}</span>
            </div>
            <div class="boat-content">
                <h3>${boat.name}</h3>
                <div class="boat-location">📍 ${boat.location}</div>
                <div class="boat-specs">
                    <span class="spec-item">👥 ${boat.capacity} kişi</span>
                    <span class="spec-item">🛏️ ${boat.cabins} kabin</span>
                    <span class="spec-item">📏 ${boat.length}m</span>
                </div>
                <div class="boat-tags">
                    ${boat.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="boat-footer">
                    <div class="boat-price">
                        ${formatPrice(boat.price)} <span>/ gün</span>
                    </div>
                    <button class="btn btn-primary" onclick="event.stopPropagation(); selectBoat(${boat.id})">
                        Seç
                    </button>
                </div>
            </div>
        </div>
    `;
}

function displaySearchResults(boats, params) {
    const container = document.querySelector('.boats-grid');
    const resultsCount = document.querySelector('.results-count');
    
    if (!container) return;
    
    if (resultsCount) {
        resultsCount.textContent = `${params.location} lokasyonunda ${boats.length} tekne bulundu.`;
    }
    
    if (boats.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <h3>Aradığınız kriterlere uygun tekne bulunamadı.</h3>
                <p style="margin-top: 1rem; color: #666;">Lütfen farklı filtreler deneyin.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = boats.map(boat => createBoatCard(boat)).join('');
}

function viewBoatDetail(boatId) {
    window.location.href = `tekne-detay.html?id=${boatId}`;
}

function selectBoat(boatId) {
    const params = getSearchParams();
    const query = new URLSearchParams({
        boatId,
        startDate: params.startDate || '',
        endDate: params.endDate || ''
    });
    window.location.href = `rezervasyon.html?${query.toString()}`;
}

// ========================================
// BOAT DETAIL PAGE
// ========================================

function initBoatDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const boatId = parseInt(urlParams.get('id'));
    
    const boat = siteData.boats.find(b => b.id === boatId);
    if (!boat) {
        showNotification('Tekne bulunamadı', 'error');
        setTimeout(() => window.location.href = 'index.html', 2000);
        return;
    }
    
    displayBoatDetail(boat);
    initGallery(boat.images);
    initBookingWidget(boat);
    initTabs();
}

function displayBoatDetail(boat) {
    // Update page title
    document.title = `${boat.name} - Yat Kiralama`;
    
    // Gallery
    const mainImage = document.querySelector('.main-image img');
    if (mainImage) {
        mainImage.src = boat.images[0];
        mainImage.alt = boat.name;
    }
    
    const thumbnailGrid = document.querySelector('.thumbnail-grid');
    if (thumbnailGrid) {
        thumbnailGrid.innerHTML = boat.images.map((img, index) => `
            <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', ${index})">
                <img src="${img}" alt="${boat.name}">
            </div>
        `).join('');
    }
    
    // Basic info
    const boatName = document.querySelector('.detail-header h1');
    if (boatName) boatName.textContent = boat.name;
    
    const location = document.querySelector('.boat-location');
    if (location) location.textContent = `📍 ${boat.location}`;
    
    // Description
    const description = document.querySelector('#description-content');
    if (description) {
        description.innerHTML = `
            <p>${boat.description}</p>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Teknik Özellikler</h3>
            <div class="specs-table">
                <div class="spec-row">
                    <span class="spec-label">Uzunluk</span>
                    <span class="spec-value">${boat.length} metre</span>
                </div>
                <div class="spec-row">
                    <span class="spec-label">Kapasite</span>
                    <span class="spec-value">${boat.capacity} kişi</span>
                </div>
                <div class="spec-row">
                    <span class="spec-label">Kabin Sayısı</span>
                    <span class="spec-value">${boat.cabins} kabin</span>
                </div>
                <div class="spec-row">
                    <span class="spec-label">İnşa Yılı</span>
                    <span class="spec-value">${boat.year}</span>
                </div>
                <div class="spec-row">
                    <span class="spec-label">Tip</span>
                    <span class="spec-value">${boat.type}</span>
                </div>
                <div class="spec-row">
                    <span class="spec-label">Puanlama</span>
                    <span class="spec-value">⭐ ${boat.rating} / 5.0</span>
                </div>
            </div>
        `;
    }
    
    // Amenities
    const amenitiesContent = document.querySelector('#amenities-content');
    if (amenitiesContent) {
        amenitiesContent.innerHTML = `
            <div class="amenities-grid">
                ${boat.amenities.map(amenity => `
                    <div class="amenity-item">
                        <span>✓</span>
                        <span>${amenity}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    // Rules
    const rulesContent = document.querySelector('#rules-content');
    if (rulesContent) {
        rulesContent.innerHTML = `
            <div class="info-box">
                <h4>İptal Politikası</h4>
                <p>• 5 gün öncesine kadar ücretsiz iptal</p>
                <p>• 5 günden az kala %50 kesinti</p>
                <p>• Rezervasyon günü iptalde iade yok</p>
            </div>
            <div class="info-box">
                <h4>Tekne Kuralları</h4>
                <p>• Maksimum kişi sayısı: ${boat.capacity} kişi</p>
                <p>• Evcil hayvan kabul edilmez</p>
                <p>• İçerde sigara içilmez</p>
                <p>• Ayakkabılar güverte dışında çıkarılmalıdır</p>
            </div>
            <div class="info-box">
                <h4>Dahil Olanlar</h4>
                <p>• Profesyonel kaptan</p>
                <p>• Yakıt</p>
                <p>• Sigorta</p>
                <p>• Marina ücretleri</p>
            </div>
        `;
    }
}

function changeMainImage(src, index) {
    const mainImage = document.querySelector('.main-image img');
    if (mainImage) mainImage.src = src;
    
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function initGallery(images) {
    // Already handled in displayBoatDetail
}

function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;
            
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(targetTab + '-content').classList.add('active');
        });
    });
}

function initBookingWidget(boat) {
    const widgetPrice = document.querySelector('.widget-price');
    if (widgetPrice) {
        widgetPrice.innerHTML = `${formatPrice(boat.price)} <span>/ gün</span>`;
    }
    
    const urlParams = new URLSearchParams(window.location.search);
    const startDate = urlParams.get('startDate');
    const endDate = urlParams.get('endDate');
    
    const startInput = document.getElementById('booking-start-date');
    const endInput = document.getElementById('booking-end-date');
    
    if (startInput && startDate) startInput.value = startDate;
    if (endInput && endDate) endInput.value = endDate;
    
    // Calculate total price
    const calculateTotal = () => {
        const start = startInput?.value;
        const end = endInput?.value;
        const days = calculateDays(start, end);
        const total = boat.price * days;
        
        const breakdown = document.querySelector('.price-breakdown');
        if (breakdown) {
            breakdown.innerHTML = `
                <div class="price-row">
                    <span>${formatPrice(boat.price)} x ${days} gün</span>
                    <span>${formatPrice(total)}</span>
                </div>
                <div class="price-row total">
                    <span>Toplam</span>
                    <span>${formatPrice(total)}</span>
                </div>
            `;
        }
    };
    
    if (startInput) {
        startInput.addEventListener('change', calculateTotal);
        calculateTotal();
    }
    if (endInput) {
        endInput.addEventListener('change', calculateTotal);
    }
    
    // Booking button
    const bookingForm = document.querySelector('.widget-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const start = startInput?.value;
            const end = endInput?.value || start;
            
            if (!start) {
                showNotification('Lütfen tarih seçin', 'error');
                return;
            }
            
            const query = new URLSearchParams({
                boatId: boat.id,
                startDate: start,
                endDate: end
            });
            window.location.href = `rezervasyon.html?${query.toString()}`;
        });
    }
}

// ========================================
// RESERVATION FLOW
// ========================================

function initReservationPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const boatId = parseInt(urlParams.get('boatId'));
    const startDate = urlParams.get('startDate');
    const endDate = urlParams.get('endDate');
    
    const boat = siteData.boats.find(b => b.id === boatId);
    if (!boat || !startDate) {
        showNotification('Rezervasyon bilgileri eksik', 'error');
        setTimeout(() => window.location.href = 'index.html', 2000);
        return;
    }
    
    displayReservationSummary(boat, startDate, endDate);
    initExtras();
    initReservationForm(boat, startDate, endDate);
}

function displayReservationSummary(boat, startDate, endDate) {
    const summaryBoat = document.querySelector('.summary-boat-info');
    if (summaryBoat) {
        summaryBoat.innerHTML = `
            <h4>${boat.name}</h4>
            <p>📍 ${boat.location}</p>
        `;
    }
    
    const summaryImage = document.querySelector('.summary-boat-image img');
    if (summaryImage) {
        summaryImage.src = boat.images[0];
        summaryImage.alt = boat.name;
    }
    
    updateReservationTotal(boat, startDate, endDate);
}

function updateReservationTotal(boat, startDate, endDate, selectedExtras = []) {
    const days = calculateDays(startDate, endDate);
    const boatTotal = boat.price * days;
    const extrasTotal = selectedExtras.reduce((sum, extra) => sum + extra.price, 0);
    const total = boatTotal + extrasTotal;
    
    const summaryDetails = document.querySelector('.summary-details');
    if (summaryDetails) {
        summaryDetails.innerHTML = `
            <div class="summary-row">
                <span>Tarih</span>
                <span>${formatDate(startDate)} - ${formatDate(endDate)}</span>
            </div>
            <div class="summary-row">
                <span>Süre</span>
                <span>${days} gün</span>
            </div>
            <div class="summary-row">
                <span>Tekne</span>
                <span>${formatPrice(boatTotal)}</span>
            </div>
            ${selectedExtras.map(extra => `
                <div class="summary-row">
                    <span>${extra.name}</span>
                    <span>${formatPrice(extra.price)}</span>
                </div>
            `).join('')}
        `;
    }
    
    const summaryTotal = document.querySelector('.summary-total');
    if (summaryTotal) {
        summaryTotal.innerHTML = `
            <span>Toplam</span>
            <span>${formatPrice(total)}</span>
        `;
    }
}

function initExtras() {
    const extrasGrid = document.querySelector('.extras-grid');
    if (!extrasGrid) return;
    
    extrasGrid.innerHTML = siteData.extras.map(extra => `
        <div class="extra-item" data-extra-id="${extra.id}">
            <div class="extra-info">
                <h4>${extra.name}</h4>
                <p>${extra.description}</p>
            </div>
            <div class="extra-price">${formatPrice(extra.price)}</div>
        </div>
    `).join('');
    
    const extraItems = extrasGrid.querySelectorAll('.extra-item');
    extraItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('selected');
            updateExtrasInSummary();
        });
    });
}

function updateExtrasInSummary() {
    const selectedItems = document.querySelectorAll('.extra-item.selected');
    const selectedExtras = Array.from(selectedItems).map(item => {
        const id = parseInt(item.dataset.extraId);
        return siteData.extras.find(e => e.id === id);
    });
    
    const urlParams = new URLSearchParams(window.location.search);
    const boatId = parseInt(urlParams.get('boatId'));
    const boat = siteData.boats.find(b => b.id === boatId);
    const startDate = urlParams.get('startDate');
    const endDate = urlParams.get('endDate');
    
    updateReservationTotal(boat, startDate, endDate, selectedExtras);
}

function initReservationForm(boat, startDate, endDate) {
    const form = document.querySelector('.reservation-form form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('customer-name')?.value,
            phone: document.getElementById('customer-phone')?.value,
            email: document.getElementById('customer-email')?.value,
            notes: document.getElementById('customer-notes')?.value
        };
        
        if (!formData.name || !formData.phone || !formData.email) {
            showNotification('Lütfen tüm gerekli alanları doldurun', 'error');
            return;
        }
        
        const selectedExtras = Array.from(document.querySelectorAll('.extra-item.selected')).map(item => {
            const id = parseInt(item.dataset.extraId);
            return siteData.extras.find(e => e.id === id);
        });
        
        const reservation = {
            id: generateId(),
            boatId: boat.id,
            boatName: boat.name,
            startDate,
            endDate,
            days: calculateDays(startDate, endDate),
            boatPrice: boat.price * calculateDays(startDate, endDate),
            extras: selectedExtras,
            extrasPrice: selectedExtras.reduce((sum, e) => sum + e.price, 0),
            customer: formData,
            status: 'confirmed',
            createdAt: new Date().toISOString()
        };
        
        reservation.total = reservation.boatPrice + reservation.extrasPrice;
        
        // Save reservation
        const reservations = getFromLocalStorage('reservations') || [];
        reservations.push(reservation);
        saveToLocalStorage('reservations', reservations);
        
        // Redirect to confirmation
        window.location.href = `onay.html?reservationId=${reservation.id}`;
    });
}

// ========================================
// CONFIRMATION PAGE
// ========================================

function initConfirmationPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const reservationId = urlParams.get('reservationId');
    
    const reservations = getFromLocalStorage('reservations') || [];
    const reservation = reservations.find(r => r.id === reservationId);
    
    if (!reservation) {
        showNotification('Rezervasyon bulunamadı', 'error');
        setTimeout(() => window.location.href = 'index.html', 2000);
        return;
    }
    
    displayConfirmation(reservation);
}

function displayConfirmation(reservation) {
    const confirmationDetails = document.querySelector('.confirmation-details');
    if (confirmationDetails) {
        confirmationDetails.innerHTML = `
            <h1 style="color: #28a745; margin-bottom: 1rem;">✓ Rezervasyon Onaylandı!</h1>
            <p style="font-size: 1.1rem; margin-bottom: 2rem;">
                Rezervasyon numaranız: <strong>${reservation.id}</strong>
            </p>
            
            <div class="info-box">
                <h3>Rezervasyon Detayları</h3>
                <p><strong>Tekne:</strong> ${reservation.boatName}</p>
                <p><strong>Tarih:</strong> ${formatDate(reservation.startDate)} - ${formatDate(reservation.endDate)}</p>
                <p><strong>Süre:</strong> ${reservation.days} gün</p>
                <p><strong>Toplam Tutar:</strong> ${formatPrice(reservation.total)}</p>
            </div>
            
            <div class="info-box">
                <h3>İletişim Bilgileri</h3>
                <p><strong>Ad Soyad:</strong> ${reservation.customer.name}</p>
                <p><strong>Telefon:</strong> ${reservation.customer.phone}</p>
                <p><strong>E-posta:</strong> ${reservation.customer.email}</p>
            </div>
            
            <div style="margin-top: 2rem; display: flex; gap: 1rem;">
                <button class="btn btn-primary" onclick="window.location.href='hesap.html'">
                    Rezervasyonlarım
                </button>
                <button class="btn btn-secondary" onclick="window.location.href='index.html'">
                    Ana Sayfa
                </button>
            </div>
        `;
    }
}

// ========================================
// ACCOUNT / DASHBOARD
// ========================================

function initAccountPage() {
    // Simple login check
    currentUser = getFromLocalStorage('currentUser');
    
    if (!currentUser) {
        // Auto login for demo
        currentUser = {
            id: 1,
            name: 'Demo Kullanıcı',
            email: 'demo@example.com'
        };
        saveToLocalStorage('currentUser', currentUser);
    }
    
    loadReservations();
}

function loadReservations() {
    const reservations = getFromLocalStorage('reservations') || [];
    const container = document.querySelector('.reservations-list');
    
    if (!container) return;
    
    if (reservations.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem;">
                <h3>Henüz rezervasyonunuz yok</h3>
                <p style="margin-top: 1rem; color: #666;">İlk rezervasyonunuzu yapmak için teknelere göz atın.</p>
                <button class="btn btn-primary" onclick="window.location.href='arama.html?location=Bodrum'" style="margin-top: 1.5rem;">
                    Tekneleri İncele
                </button>
            </div>
        `;
        return;
    }
    
    container.innerHTML = reservations.reverse().map(res => createReservationCard(res)).join('');
}

function createReservationCard(reservation) {
    const statusClass = `status-${reservation.status}`;
    const statusText = {
        'confirmed': 'Onaylandı',
        'pending': 'Beklemede',
        'completed': 'Tamamlandı'
    }[reservation.status] || 'Bilinmiyor';
    
    return `
        <div class="reservation-card">
            <div class="reservation-header">
                <div>
                    <h3>${reservation.boatName}</h3>
                    <p style="color: #666; margin-top: 0.25rem;">
                        Rezervasyon No: ${reservation.id}
                    </p>
                </div>
                <span class="reservation-status ${statusClass}">${statusText}</span>
            </div>
            <div class="reservation-info">
                <div class="info-item">
                    <span class="info-label">Tarih</span>
                    <span class="info-value">${formatDate(reservation.startDate)} - ${formatDate(reservation.endDate)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Süre</span>
                    <span class="info-value">${reservation.days} gün</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Toplam Tutar</span>
                    <span class="info-value" style="color: #0066cc; font-weight: bold;">${formatPrice(reservation.total)}</span>
                </div>
            </div>
            <div class="reservation-actions">
                <button class="btn btn-secondary" onclick="viewReservationDetail('${reservation.id}')">
                    Detayları Gör
                </button>
                ${reservation.status === 'confirmed' ? `
                    <button class="btn btn-secondary" onclick="cancelReservation('${reservation.id}')">
                        İptal Et
                    </button>
                ` : ''}
            </div>
        </div>
    `;
}

function viewReservationDetail(reservationId) {
    showNotification('Rezervasyon detayları gösteriliyor...', 'success');
}

function cancelReservation(reservationId) {
    if (!confirm('Rezervasyonu iptal etmek istediğinizden emin misiniz?')) return;
    
    const reservations = getFromLocalStorage('reservations') || [];
    const index = reservations.findIndex(r => r.id === reservationId);
    
    if (index !== -1) {
        reservations.splice(index, 1);
        saveToLocalStorage('reservations', reservations);
        showNotification('Rezervasyon iptal edildi', 'success');
        loadReservations();
    }
}

// ========================================
// BLOG FUNCTIONALITY
// ========================================

function displayBlogPosts() {
    const container = document.querySelector('.blog-grid');
    if (!container) return;
    
    container.innerHTML = siteData.blogs.map(blog => `
        <div class="blog-card" onclick="viewBlogDetail(${blog.id})">
            <div class="blog-image">
                <img src="${blog.image}" alt="${blog.title}">
            </div>
            <div class="blog-content">
                <div class="blog-date">${formatDate(blog.date)}</div>
                <h3>${blog.title}</h3>
                <p class="blog-excerpt">${blog.excerpt}</p>
                <a href="#" class="read-more">Devamını Oku →</a>
            </div>
        </div>
    `).join('');
}

function viewBlogDetail(blogId) {
    window.location.href = `blog-detay.html?id=${blogId}`;
}

function initBlogDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = parseInt(urlParams.get('id'));
    
    const blog = siteData.blogs.find(b => b.id === blogId);
    if (!blog) {
        showNotification('Blog yazısı bulunamadı', 'error');
        setTimeout(() => window.location.href = 'blog.html', 2000);
        return;
    }
    
    displayBlogDetail(blog);
}

function displayBlogDetail(blog) {
    document.title = `${blog.title} - Yat Kiralama Rehberi`;
    
    const content = document.querySelector('.blog-detail-content');
    if (content) {
        content.innerHTML = `
            <div class="blog-header">
                <h1>${blog.title}</h1>
                <div class="blog-meta">
                    <span>📅 ${formatDate(blog.date)}</span>
                    <span>📍 ${blog.location}</span>
                </div>
            </div>
            <img src="${blog.image}" alt="${blog.title}" style="width: 100%; border-radius: 12px; margin: 2rem 0;">
            <div class="blog-text">
                <p>${blog.content}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h2>Alt Başlık Örneği</h2>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div style="margin-top: 3rem; text-align: center; padding: 2rem; background: #f8f9fa; border-radius: 12px;">
                <h3>Bu bölgede tekne kiralamak ister misiniz?</h3>
                <button class="btn btn-primary" onclick="window.location.href='arama.html?location=${blog.location}'" style="margin-top: 1rem;">
                    ${blog.location} Teknelerini İncele
                </button>
            </div>
        `;
    }
}

// ========================================
// TESTIMONIALS
// ========================================

function displayTestimonials() {
    const container = document.querySelector('.testimonials-grid');
    if (!container) return;
    
    container.innerHTML = siteData.testimonials.map(testimonial => `
        <div class="testimonial-card">
            <div class="stars">${'⭐'.repeat(testimonial.rating)}</div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">
                <div class="author-avatar">${testimonial.author.charAt(0)}</div>
                <div class="author-info">
                    <h4>${testimonial.author}</h4>
                    <p>${formatDate(testimonial.date)}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// ========================================
// AUTHENTICATION (Simple Demo)
// ========================================

function initLoginModal() {
    // Simple demo login - would be replaced with real auth
    const loginLinks = document.querySelectorAll('[href="giris.html"]');
    loginLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showLoginModal();
        });
    });
}

function showLoginModal() {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="this.closest('.modal').remove()">×</button>
            <h2 style="margin-bottom: 1.5rem;">Giriş Yap</h2>
            <form id="login-form">
                <div class="form-group">
                    <label>E-posta</label>
                    <input type="email" value="demo@example.com" required>
                </div>
                <div class="form-group">
                    <label>Şifre</label>
                    <input type="password" value="demo123" required>
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">
                    Giriş Yap
                </button>
                <p style="text-align: center; margin-top: 1rem; color: #666;">
                    Hesabınız yok mu? <a href="#" style="color: #0066cc;">Kayıt Olun</a>
                </p>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        currentUser = {
            id: 1,
            name: 'Demo Kullanıcı',
            email: 'demo@example.com'
        };
        saveToLocalStorage('currentUser', currentUser);
        modal.remove();
        showNotification('Giriş başarılı!', 'success');
        updateHeaderAuth();
        setTimeout(() => window.location.reload(), 1000);
    });
}

// ========================================
// PAGE INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize common components
    initHeader();
    initSearchBar();
    
    // Page-specific initializations
    const page = window.location.pathname.split('/').pop() || 'index.html';
    
    switch(page) {
        case 'index.html':
        case '':
            displayFeaturedBoats();
            displayBlogPosts();
            displayTestimonials();
            break;
            
        case 'arama.html':
            const params = getSearchParams();
            let boats = siteData.boats;
            if (params.location) {
                boats = boats.filter(b => b.location === params.location);
            }
            displaySearchResults(boats, params);
            initFilters();
            break;
            
        case 'tekne-detay.html':
            initBoatDetailPage();
            break;
            
        case 'rezervasyon.html':
            initReservationPage();
            break;
            
        case 'onay.html':
            initConfirmationPage();
            break;
            
        case 'hesap.html':
            initAccountPage();
            break;
            
        case 'blog.html':
            displayBlogPosts();
            break;
            
        case 'blog-detay.html':
            initBlogDetailPage();
            break;
    }
    
    // Initialize modals
    initLoginModal();
});

// ========================================
// CSS ANIMATIONS
// ========================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

