export default {
  async fetch(request, env, ctx) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Professional couch and upholstery cleaning in Edmonton. Specializing in sofa, sectional, and furniture cleaning with before-and-after results you can see. Get a free quote today.">
    <meta name="keywords" content="couch cleaning Edmonton, sofa cleaning Edmonton, upholstery cleaning Edmonton, sectional cleaning, pet stain removal, furniture cleaning">
    <title>Clean Edmonton | Professional Couch & Upholstery Cleaning</title>
    <meta property="og:title" content="Clean Edmonton | Professional Couch & Upholstery Cleaning">
    <meta property="og:description" content="Professional couch and upholstery cleaning in Edmonton. Free quotes, before-and-after results, and mobile service.">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="en_CA">
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Clean Edmonton",
            "description": "Professional couch and upholstery cleaning in Edmonton and surrounding areas.",
            "telephone": "+1-587-566-9688",
            "areaServed": ["Edmonton", "St. Albert", "Sherwood Park", "Beaumont", "Leduc", "Spruce Grove", "Fort Saskatchewan"],
            "priceRange": "$$",
            "openingHoursSpecification": [
                { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "opens": "08:00", "closes": "19:00" }
            ],
            "image": "/images/hero-cleaning.jpg"
        }
    </script>
    <style>
        :root {
            --primary: #1a3350;
            --primary-light: #264a6e;
            --accent: #1a7d6e;
            --accent-light: #25a392;
            --cta: #e8782a;
            --cta-hover: #c9651e;
            --cta-secondary: #1a7d6e;
            --bg-light: #f7f8fa;
            --bg-white: #ffffff;
            --text: #2d2d2d;
            --text-light: #5a5a5a;
            --text-lighter: #7a7a7a;
            --border: #e0e4e8;
            --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
            --shadow: 0 4px 16px rgba(0,0,0,0.10);
            --shadow-lg: 0 8px 30px rgba(0,0,0,0.13);
            --radius-sm: 8px;
            --radius: 12px;
            --radius-lg: 18px;
            --radius-btn: 28px;
            --font: 'Segoe UI', system-ui, -apple-system, sans-serif;
            --transition: 0.25s ease;
            --max-width: 1100px;
            --header-height: 70px;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; scroll-padding-top: calc(var(--header-height) + 20px); }
        body {
            font-family: var(--font);
            color: var(--text);
            background: var(--bg-white);
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
            padding-bottom: 80px;
        }
        .site-header {
            position: sticky; top: 0; z-index: 1000; background: #fff; border-bottom: 1px solid var(--border);
            box-shadow: var(--shadow-sm); height: var(--header-height); display: flex; align-items: center; padding: 0 20px;
        }
        .header-inner { max-width: var(--max-width); width: 100%; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; }
        .logo { font-size: 1.5rem; font-weight: 700; color: var(--primary); text-decoration: none; letter-spacing: -0.5px; white-space: nowrap; }
        .logo span { color: var(--accent); }
        .nav-desktop { display: none; gap: 6px; align-items: center; flex-wrap: wrap; justify-content: flex-end; }
        .nav-desktop a { text-decoration: none; color: var(--text); font-weight: 500; font-size: 0.9rem; padding: 8px 13px; border-radius: 20px; transition: var(--transition); white-space: nowrap; }
        .nav-desktop a:hover, .nav-desktop a.active { background: var(--bg-light); color: var(--accent); }
        .btn-nav { background: var(--cta) !important; color: #fff !important; font-weight: 600 !important; padding: 9px 18px !important; border-radius: var(--radius-btn) !important; }
        .btn-nav:hover { background: var(--cta-hover) !important; transform: translateY(-1px); }
        .btn-nav-outline { background: transparent !important; color: var(--accent) !important; border: 2px solid var(--accent) !important; font-weight: 600 !important; padding: 8px 17px !important; border-radius: var(--radius-btn) !important; }
        .btn-nav-outline:hover { background: var(--accent) !important; color: #fff !important; }
        .hamburger { display: flex; flex-direction: column; gap: 5px; cursor: pointer; z-index: 1001; padding: 8px; background: none; border: none; }
        .hamburger span { display: block; width: 26px; height: 2.5px; background: var(--primary); border-radius: 2px; transition: var(--transition); }
        .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px,5px); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px,-5px); }
        .mobile-nav { position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: #fff; z-index: 999; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 16px; transform: translateY(-100%); transition: transform 0.35s ease; padding: 30px; }
        .mobile-nav.open { transform: translateY(0); }
        .mobile-nav a { text-decoration: none; color: var(--text); font-size: 1.2rem; font-weight: 600; padding: 10px 20px; border-radius: 25px; }
        .mobile-nav a:hover { background: var(--bg-light); color: var(--accent); }
        .mobile-nav .btn-nav { color: #fff !important; font-size: 1.1rem; padding: 12px 28px !important; }
        .section { padding: 50px 20px; }
        .section-alt { background: var(--bg-light); }
        .section-inner { max-width: var(--max-width); margin: 0 auto; }
        .section-title { font-size: 1.8rem; font-weight: 700; color: var(--primary); margin-bottom: 8px; letter-spacing: -0.5px; }
        .section-subtitle { color: var(--text-light); font-size: 1rem; margin-bottom: 32px; max-width: 600px; }
        .section-title.centered, .section-subtitle.centered { text-align: center; margin-left: auto; margin-right: auto; }
        .hero { padding: 40px 20px 50px; background: linear-gradient(170deg, #f9fafb 0%, #eef5f4 50%, #f7f8fa 100%); }
        .hero-inner { max-width: var(--max-width); margin: 0 auto; display: flex; flex-direction: column; gap: 30px; align-items: center; text-align: center; }
        .hero-content h1 { font-size: 2rem; font-weight: 800; color: var(--primary); letter-spacing: -1px; line-height: 1.2; margin-bottom: 12px; }
        .hero-content .subheadline { font-size: 1.05rem; color: var(--text-light); margin-bottom: 24px; line-height: 1.5; max-width: 500px; margin-left: auto; margin-right: auto; }
        .hero-buttons { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; }
        .btn { display: inline-block; padding: 13px 26px; border-radius: var(--radius-btn); font-weight: 600; font-size: 1rem; text-decoration: none; cursor: pointer; border: none; transition: var(--transition); text-align: center; white-space: nowrap; }
        .btn-primary { background: var(--cta); color: #fff; box-shadow: 0 4px 14px rgba(232,120,42,0.35); }
        .btn-primary:hover { background: var(--cta-hover); transform: translateY(-2px); box-shadow: 0 6px 20px rgba(232,120,42,0.4); }
        .btn-secondary { background: var(--accent); color: #fff; box-shadow: 0 4px 14px rgba(26,125,110,0.3); }
        .btn-secondary:hover { background: var(--accent-light); transform: translateY(-2px); box-shadow: 0 6px 20px rgba(26,125,110,0.38); }
        .btn-outline { background: #fff; color: var(--primary); border: 2px solid var(--border); }
        .btn-outline:hover { border-color: var(--accent); color: var(--accent); background: #f9fdfc; transform: translateY(-1px); }
        .btn-white { background: #fff; color: var(--accent); font-weight: 700; }
        .btn-white:hover { background: #f0f7f5; }
        .hero-image { width: 100%; max-width: 500px; border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-lg); aspect-ratio: 4/3; background: #ddd; }
        .hero-image img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .intro-text { font-size: 1.05rem; color: var(--text-light); max-width: 700px; line-height: 1.7; }
        .intro-text p+p { margin-top: 14px; }
        .cards-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
        .card { background: #fff; border-radius: var(--radius); padding: 24px 20px; box-shadow: var(--shadow); border: 1px solid var(--border); display: flex; flex-direction: column; gap: 10px; }
        .card:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); }
        .card-icon { font-size: 2.2rem; width: 52px; height: 52px; border-radius: 50%; background: #e8f5f2; display: flex; align-items: center; justify-content: center; }
        .card h3 { font-size: 1.1rem; font-weight: 700; color: var(--primary); }
        .card p { font-size: 0.9rem; color: var(--text-light); }
        .why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .why-item { display: flex; align-items: flex-start; gap: 10px; font-size: 0.9rem; }
        .why-item .check { color: var(--accent); font-weight: 700; font-size: 1.1rem; }
        .steps { display: flex; flex-direction: column; gap: 20px; }
        .step { display: flex; gap: 16px; align-items: flex-start; }
        .step-num { width: 44px; height: 44px; border-radius: 50%; background: var(--accent); color: #fff; font-weight: 700; font-size: 1.2rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .step h4 { font-size: 1rem; color: var(--primary); margin-bottom: 2px; }
        .step p { font-size: 0.9rem; color: var(--text-light); }
        .gallery-filters { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; justify-content: center; }
        .gallery-filters button { padding: 8px 18px; border-radius: 20px; border: 1.5px solid var(--border); background: #fff; cursor: pointer; font-weight: 500; font-size: 0.9rem; transition: var(--transition); color: var(--text); }
        .gallery-filters button.active, .gallery-filters button:hover { background: var(--accent); color: #fff; border-color: var(--accent); }
        .ba-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
        .ba-pair { background: #fff; border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow); border: 1px solid var(--border); }
        .ba-label-bar { display: flex; justify-content: space-between; padding: 10px 16px; font-weight: 600; font-size: 0.85rem; background: #fafbfc; border-bottom: 1px solid var(--border); }
        .ba-label-bar .before-label { color: #c0392b; }
        .ba-label-bar .after-label { color: #1a7d6e; }
        .ba-comparison { position: relative; width: 100%; aspect-ratio: 4/3; overflow: hidden; cursor: ew-resize; user-select: none; background: #e0e0e0; }
        .ba-comparison img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; pointer-events: none; }
        .ba-comparison .img-after { clip-path: inset(0 50% 0 0); z-index: 2; }
        .ba-comparison .img-before { z-index: 1; }
        .ba-handle { position: absolute; top: 0; bottom: 0; width: 3px; background: #fff; z-index: 3; left: 50%; pointer-events: none; box-shadow: 0 0 8px rgba(0,0,0,0.25); }
        .ba-handle::after { content: '⟷'; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); background: #fff; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; box-shadow: 0 2px 10px rgba(0,0,0,0.2); pointer-events: auto; cursor: ew-resize; color: #555; }
        .ba-info { padding: 12px 16px; font-size: 0.9rem; color: var(--text-light); }
        .ba-info strong { color: var(--primary); }
        .reviews-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .review-card { background: #fff; border-radius: var(--radius); padding: 20px; box-shadow: var(--shadow); border: 1px solid var(--border); }
        .review-stars { color: #f0a500; font-size: 1rem; letter-spacing: 2px; margin-bottom: 6px; }
        .review-text { font-size: 0.95rem; font-style: italic; }
        .review-author { font-size: 0.85rem; color: var(--text-lighter); margin-top: 8px; font-weight: 600; }
        .review-service { font-size: 0.8rem; color: var(--accent); }
        .area-tags { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }
        .area-tag { background: #e8f5f2; color: var(--accent); padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 0.9rem; }
        .faq-list { display: flex; flex-direction: column; gap: 10px; max-width: 750px; }
        .faq-item { border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; background: #fff; }
        .faq-question { width: 100%; text-align: left; padding: 16px 20px; font-weight: 600; font-size: 0.95rem; background: #fff; border: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; color: var(--primary); }
        .faq-arrow { transition: transform 0.3s; }
        .faq-item.open .faq-arrow { transform: rotate(180deg); }
        .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.4s; padding: 0 20px; font-size: 0.9rem; color: var(--text-light); }
        .faq-item.open .faq-answer { max-height: 400px; padding: 0 20px 16px; }
        .quote-form { background: #fff; border-radius: var(--radius-lg); padding: 28px 20px; box-shadow: var(--shadow-lg); border: 1px solid var(--border); }
        .form-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .form-group { display: flex; flex-direction: column; gap: 5px; }
        .form-group label { font-weight: 600; font-size: 0.85rem; color: var(--primary); }
        .form-group input, .form-group select, .form-group textarea { padding: 11px 14px; border: 1.5px solid var(--border); border-radius: var(--radius-sm); font-size: 0.95rem; font-family: var(--font); background: #fafbfc; }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px rgba(26,125,110,0.1); background: #fff; }
        .form-disclaimer { font-size: 0.8rem; color: var(--text-lighter); margin-top: 12px; text-align: center; }
        .cta-section { text-align: center; padding: 50px 20px; background: linear-gradient(160deg, #1a3350 0%, #1a4a5e 100%); color: #fff; }
        .cta-section .section-title { color: #fff; }
        .cta-section p { color: rgba(255,255,255,0.85); max-width: 500px; margin: 0 auto 24px; }
        .cta-buttons { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; }
        .site-footer { background: #1a1f28; color: #bbb; padding: 30px 20px; text-align: center; font-size: 0.85rem; }
        .site-footer a { color: #ccc; text-decoration: underline; }
        .footer-links { display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; margin-bottom: 10px; }
        .mobile-sticky-bar { position: fixed; bottom: 0; left: 0; width: 100%; background: #fff; border-top: 1px solid var(--border); display: flex; gap: 10px; padding: 10px 16px; z-index: 998; box-shadow: 0 -2px 12px rgba(0,0,0,0.08); }
        .mobile-sticky-bar .btn { flex: 1; padding: 12px 10px; font-size: 0.9rem; border-radius: 25px; }
        .mobile-sticky-bar .btn-call { background: #fff; color: var(--accent); border: 2px solid var(--accent); font-weight: 700; }
        .toast { position: fixed; top: 20px; left: 50%; transform: translateX(-50%); background: #1a7d6e; color: #fff; padding: 14px 28px; border-radius: 30px; z-index: 2000; font-weight: 600; box-shadow: 0 6px 20px rgba(0,0,0,0.25); animation: toastIn 0.4s ease, toastOut 0.4s ease 2.6s forwards; }
        @keyframes toastIn { from { opacity: 0; transform: translateX(-50%) translateY(-30px); } to { opacity: 1; transform: translateX(-50%) translateY(0); } }
        @keyframes toastOut { from { opacity: 1; transform: translateX(-50%) translateY(0); } to { opacity: 0; transform: translateX(-50%) translateY(-30px); } }
        @media (min-width:600px) {
            .cards-grid { grid-template-columns: 1fr 1fr; }
            .reviews-grid { grid-template-columns: 1fr 1fr; }
            .form-grid { grid-template-columns: 1fr 1fr; }
            .form-grid .full-width { grid-column: 1/-1; }
            .ba-grid { grid-template-columns: 1fr 1fr; }
            .why-grid { grid-template-columns: 1fr 1fr 1fr; }
            .hero-content h1 { font-size: 2.4rem; }
            .section-title { font-size: 2rem; }
        }
        @media (min-width:768px) {
            .hamburger { display: none; }
            .mobile-nav { display: none; }
            .nav-desktop { display: flex; }
            .hero-inner { flex-direction: row; text-align: left; gap: 40px; }
            .hero-content { flex: 1; }
            .hero-image { flex: 1; max-width: 450px; }
            .hero-content .subheadline { margin-left: 0; margin-right: 0; }
            .hero-buttons { justify-content: flex-start; }
            .cards-grid { grid-template-columns: repeat(3,1fr); }
            .reviews-grid { grid-template-columns: repeat(3,1fr); }
            .steps { flex-direction: row; flex-wrap: wrap; }
            .step { flex: 1; min-width: 170px; flex-direction: column; align-items: center; text-align: center; }
            body { padding-bottom: 0; }
            .mobile-sticky-bar { display: none; }
            .section { padding: 60px 24px; }
            .quote-form { padding: 36px 32px; }
        }
        @media (min-width:900px) {
            .ba-grid { grid-template-columns: repeat(3,1fr); }
            .cards-grid { grid-template-columns: repeat(4,1fr); }
            .why-grid { grid-template-columns: repeat(5,1fr); }
        }
    </style>
</head>
<body>
    <header class="site-header" id="header">
        <div class="header-inner">
            <a href="#hero" class="logo">Clean<span>Edmonton</span></a>
            <nav class="nav-desktop" id="navDesktop">
                <a href="#hero" class="active">Home</a>
                <a href="#services">Services</a>
                <a href="#pricing">Pricing</a>
                <a href="#gallery">Before & After</a>
                <a href="#about">About</a>
                <a href="#faq">FAQ</a>
                <a href="#contact">Contact</a>
                <a href="#quote" class="btn-nav">Get a Free Quote</a>
                <a href="tel:+15875669688" class="btn-nav-outline">📞 Call Now</a>
            </nav>
            <button class="hamburger" id="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
        </div>
    </header>
    <nav class="mobile-nav" id="mobileNav">
        <a href="#hero">Home</a><a href="#services">Services</a><a href="#pricing">Pricing</a><a href="#gallery">Before & After</a><a href="#about">About</a><a href="#faq">FAQ</a><a href="#contact">Contact</a>
        <a href="#quote" class="btn-nav">Get a Free Quote</a>
        <a href="tel:+15875669688" style="color:var(--accent);font-weight:700;">📞 Call: +1 (587) 566-9688</a>
    </nav>

    <section class="hero" id="hero">
        <div class="hero-inner">
            <div class="hero-content">
                <h1>Professional Couch &<br>Upholstery Cleaning</h1>
                <p class="subheadline">We deep-clean couches, sectionals, chairs and other upholstered furniture to remove built-up dirt, stains, odors and pet messes.</p>
                <div class="hero-buttons">
                    <a href="#quote" class="btn btn-primary">Get a Free Quote</a>
                    <a href="#booking" class="btn btn-secondary">Book a Cleaning</a>
                    <a href="tel:+15875669688" class="btn btn-outline">📞 Call Now</a>
                </div>
            </div>
            <div class="hero-image">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=450&fit=crop&auto=format" alt="Professional couch cleaning service" loading="eager">
            </div>
        </div>
    </section>

    <section class="section" id="intro">
        <div class="section-inner">
            <div class="intro-text">
                <p>Your furniture collects dirt, body oils, food spills, pet hair and odors over time. Our professional upholstery cleaning service helps refresh your furniture and improve its appearance <strong>without the cost of replacing it</strong>.</p>
                <p>We clean couches, sectionals, loveseats, recliners, dining chairs, office chairs and other fabric furniture throughout <strong>Edmonton and surrounding areas</strong>.</p>
            </div>
        </div>
    </section>

    <section class="section section-alt" id="gallery">
        <div class="section-inner">
            <h2 class="section-title centered">Before & After Gallery</h2>
            <p class="section-subtitle centered">Real results from our couch and upholstery cleaning services. <em>Drag the slider handle to compare.</em></p>
            <div class="gallery-filters">
                <button class="active" data-filter="all">All</button>
                <button data-filter="couches">Couches</button>
                <button data-filter="sectionals">Sectionals</button>
                <button data-filter="chairs">Chairs</button>
                <button data-filter="dining">Dining Chairs</button>
                <button data-filter="pet">Pet Stains</button>
                <button data-filter="stains">General Stains</button>
            </div>
            <div class="ba-grid" id="baGrid">
                <div class="ba-pair" data-category="couches">
                    <div class="ba-label-bar"><span class="before-label">BEFORE</span><span class="after-label">AFTER</span></div>
                    <div class="ba-comparison">
                        <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=450&fit=crop&auto=format" alt="Couch before" class="img-before">
                        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=450&fit=crop&auto=format" alt="Couch after" class="img-after">
                        <div class="ba-handle"></div>
                    </div>
                    <div class="ba-info"><strong>Fabric Couch</strong> — Deep clean removing years of dirt and body oils.</div>
                </div>
                <div class="ba-pair" data-category="sectionals">
                    <div class="ba-label-bar"><span class="before-label">BEFORE</span><span class="after-label">AFTER</span></div>
                    <div class="ba-comparison">
                        <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=450&fit=crop&auto=format" alt="Sectional before" class="img-before">
                        <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=450&fit=crop&auto=format" alt="Sectional after" class="img-after">
                        <div class="ba-handle"></div>
                    </div>
                    <div class="ba-info"><strong>Large Sectional</strong> — Stain treatment and full deep clean.</div>
                </div>
                <div class="ba-pair" data-category="chairs">
                    <div class="ba-label-bar"><span class="before-label">BEFORE</span><span class="after-label">AFTER</span></div>
                    <div class="ba-comparison">
                        <img src="https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=450&fit=crop&auto=format" alt="Armchair before" class="img-before">
                        <img src="https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=600&h=450&fit=crop&auto=format" alt="Armchair after" class="img-after">
                        <div class="ba-handle"></div>
                    </div>
                    <div class="ba-info"><strong>Fabric Armchair</strong> — Food stain and general soiling removed.</div>
                </div>
                <div class="ba-pair" data-category="dining">
                    <div class="ba-label-bar"><span class="before-label">BEFORE</span><span class="after-label">AFTER</span></div>
                    <div class="ba-comparison">
                        <img src="https://images.unsplash.com/photo-1503602642458-232111445657?w=600&h=450&fit=crop&auto=format" alt="Dining chairs before" class="img-before">
                        <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=450&fit=crop&auto=format" alt="Dining chairs after" class="img-after">
                        <div class="ba-handle"></div>
                    </div>
                    <div class="ba-info"><strong>Dining Chair Set</strong> — All seat cushions refreshed.</div>
                </div>
                <div class="ba-pair" data-category="pet">
                    <div class="ba-label-bar"><span class="before-label">BEFORE</span><span class="after-label">AFTER</span></div>
                    <div class="ba-comparison">
                        <img src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=450&fit=crop&auto=format" alt="Pet stain before" class="img-before">
                        <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=450&fit=crop&auto=format" alt="Pet stain after" class="img-after">
                        <div class="ba-handle"></div>
                    </div>
                    <div class="ba-info"><strong>Pet Stain Treatment</strong> — Urine stain and odor significantly reduced.</div>
                </div>
                <div class="ba-pair" data-category="stains">
                    <div class="ba-label-bar"><span class="before-label">BEFORE</span><span class="after-label">AFTER</span></div>
                    <div class="ba-comparison">
                        <img src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&h=450&fit=crop&auto=format" alt="Stain before" class="img-before">
                        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=450&fit=crop&auto=format" alt="Stain after" class="img-after">
                        <div class="ba-handle"></div>
                    </div>
                    <div class="ba-info"><strong>Drink Stain</strong> — Red wine spill treated with noticeable improvement.</div>
                </div>
            </div>
            <p style="text-align:center;margin-top:16px;font-size:0.85rem;color:var(--text-lighter);"><em>⚠️ Results vary. Some stains may be permanent. See disclaimers below.</em></p>
        </div>
    </section>

    <section class="section" id="services">
        <div class="section-inner">
            <h2 class="section-title centered">Our Services</h2>
            <p class="section-subtitle centered">Specialized couch and upholstery cleaning for every type of fabric furniture.</p>
            <div class="cards-grid">
                <div class="card"><div class="card-icon">🛋️</div><h3>Couch Cleaning</h3><p>Deep cleaning for fabric couches to remove dirt, spills, odors.</p></div>
                <div class="card"><div class="card-icon">🪑</div><h3>Sectional Cleaning</h3><p>Professional cleaning for small, medium and large sectionals.</p></div>
                <div class="card"><div class="card-icon">💺</div><h3>Loveseat Cleaning</h3><p>Cleaning for two-seat sofas and compact furniture.</p></div>
                <div class="card"><div class="card-icon">🪑</div><h3>Recliner & Armchair</h3><p>Fabric recliners, accent chairs and armchairs.</p></div>
                <div class="card"><div class="card-icon">🍽️</div><h3>Dining Chair Cleaning</h3><p>Upholstered dining chairs and seat cushions.</p></div>
                <div class="card"><div class="card-icon">🐾</div><h3>Pet Stain & Odor</h3><p>Special treatment for pet accidents and odors.</p></div>
                <div class="card"><div class="card-icon">🦶</div><h3>Ottoman & Bench</h3><p>Cleaning for upholstered ottomans and benches.</p></div>
                <div class="card"><div class="card-icon">💼</div><h3>Office Chair Cleaning</h3><p>Fabric office chairs and commercial seating.</p></div>
            </div>
        </div>
    </section>

    <section class="section section-alt" id="why-us">
        <div class="section-inner">
            <h2 class="section-title centered">Why Choose Clean Edmonton</h2>
            <p class="section-subtitle centered">We're couch and upholstery specialists — not general cleaners.</p>
            <div class="why-grid">
                <div class="why-item"><span class="check">✓</span> Couch & upholstery specialists</div>
                <div class="why-item"><span class="check">✓</span> Professional equipment</div>
                <div class="why-item"><span class="check">✓</span> Careful furniture treatment</div>
                <div class="why-item"><span class="check">✓</span> Pet & family-conscious products</div>
                <div class="why-item"><span class="check">✓</span> Honest & clear pricing</div>
                <div class="why-item"><span class="check">✓</span> Convenient mobile service</div>
                <div class="why-item"><span class="check">✓</span> Easy online quotes</div>
                <div class="why-item"><span class="check">✓</span> Before-and-after results</div>
                <div class="why-item"><span class="check">✓</span> Friendly & reliable service</div>
                <div class="why-item"><span class="check">✓</span> Satisfaction-focused</div>
            </div>
        </div>
    </section>

    <section class="section" id="how-it-works">
        <div class="section-inner">
            <h2 class="section-title centered">How It Works</h2>
            <p class="section-subtitle centered">Simple process from quote to clean furniture.</p>
            <div class="steps">
                <div class="step"><div class="step-num">1</div><div><h4>Request a Quote</h4><p>Send pictures and details about your furniture.</p></div></div>
                <div class="step"><div class="step-num">2</div><div><h4>Receive Estimate</h4><p>We review size, material and condition.</p></div></div>
                <div class="step"><div class="step-num">3</div><div><h4>Choose Appointment</h4><p>Select a date and time that works.</p></div></div>
                <div class="step"><div class="step-num">4</div><div><h4>We Clean</h4><p>Inspect, pre-treat, clean and extract.</p></div></div>
                <div class="step"><div class="step-num">5</div><div><h4>Allow to Dry</h4><p>Drying time varies by material and conditions.</p></div></div>
            </div>
        </div>
    </section>

    <section class="section section-alt" id="pricing">
        <div class="section-inner">
            <h2 class="section-title centered">Pricing</h2>
            <p class="section-subtitle centered">Transparent starting prices. Send pictures for an accurate quote.</p>
            <div class="cards-grid" style="max-width:900px;margin:0 auto;">
                <div class="card"><h3>Dining Chair</h3><p>Starting at <strong>$25</strong></p></div>
                <div class="card"><h3>Office Chair</h3><p>Starting at <strong>$35</strong></p></div>
                <div class="card"><h3>Armchair</h3><p>Starting at <strong>$55</strong></p></div>
                <div class="card"><h3>Recliner</h3><p>Starting at <strong>$65</strong></p></div>
                <div class="card"><h3>Loveseat</h3><p>Starting at <strong>$85</strong></p></div>
                <div class="card"><h3>3-Seat Couch</h3><p>Starting at <strong>$110</strong></p></div>
                <div class="card"><h3>Small Sectional</h3><p>Starting at <strong>$145</strong></p></div>
                <div class="card"><h3>Large Sectional</h3><p><strong>Custom quote</strong></p></div>
                <div class="card"><h3>Ottoman / Bench</h3><p>Starting at <strong>$30</strong></p></div>
                <div class="card"><h3>Headboard</h3><p>Starting at <strong>$40</strong></p></div>
                <div class="card"><h3>Pet Stain Treatment</h3><p><strong>Additional charge</strong></p></div>
                <div class="card"><h3>Pet Odor Treatment</h3><p><strong>Additional charge</strong></p></div>
            </div>
            <p style="text-align:center;margin-top:20px;font-size:0.85rem;color:var(--text-lighter);">Final pricing depends on furniture size, material, condition, stains, and location. <strong>Send pictures for the most accurate quote.</strong></p>
        </div>
    </section>

    <section class="section" id="reviews">
        <div class="section-inner">
            <h2 class="section-title centered">What Our Customers Say</h2>
            <div class="reviews-grid">
                <div class="review-card"><div class="review-stars">★★★★★</div><p class="review-text">"Our sectional looks brand new! Pet stains almost completely gone."</p><p class="review-author">— Sarah M.</p><p class="review-service">Sectional Cleaning · Edmonton</p></div>
                <div class="review-card"><div class="review-stars">★★★★★</div><p class="review-text">"Incredible before-and-after on dining chairs. Very professional."</p><p class="review-author">— David L.</p><p class="review-service">Dining Chairs · Sherwood Park</p></div>
                <div class="review-card"><div class="review-stars">★★★★★</div><p class="review-text">"Finally a company that specializes in upholstery. Recliner looks and smells fresh."</p><p class="review-author">— Maria K.</p><p class="review-service">Recliner · St. Albert</p></div>
            </div>
            <div style="text-align:center;margin-top:20px;"><a href="#" class="btn btn-outline">⭐ Leave Us a Review</a></div>
        </div>
    </section>

    <section class="section section-alt" id="service-area">
        <div class="section-inner" style="text-align:center;">
            <h2 class="section-title centered">Service Area</h2>
            <p class="section-subtitle centered">Mobile couch and upholstery cleaning in Edmonton and surrounding communities.</p>
            <div class="area-tags">
                <span class="area-tag">Edmonton</span><span class="area-tag">St. Albert</span><span class="area-tag">Sherwood Park</span><span class="area-tag">Beaumont</span><span class="area-tag">Leduc</span><span class="area-tag">Spruce Grove</span><span class="area-tag">Fort Saskatchewan</span>
            </div>
            <p style="margin-top:16px;font-size:0.85rem;">A travel fee may apply outside the main service area.</p>
        </div>
    </section>

    <section class="section" id="about">
        <div class="section-inner">
            <h2 class="section-title centered">About Clean Edmonton</h2>
            <p class="section-subtitle centered">Locally operated, focused on clean upholstery.</p>
            <div class="intro-text" style="margin:0 auto;">
                <p>We are a locally operated couch and upholstery cleaning business serving <strong>Edmonton and surrounding areas</strong>. We specialize in cleaning couches, sectionals, chairs and other fabric furniture.</p>
                <p>Our goal is to provide reliable service, clear communication and noticeable results. We take the time to inspect each item and carefully treat problem areas.</p>
                <p>Whether your furniture needs routine cleaning, stain treatment or help with pet-related messes, <strong>send us pictures for a personalized quote</strong>.</p>
            </div>
        </div>
    </section>

    <section class="section section-alt" id="faq">
        <div class="section-inner">
            <h2 class="section-title centered">Frequently Asked Questions</h2>
            <div class="faq-list" style="margin:0 auto;">
                <div class="faq-item"><button class="faq-question">How much does couch cleaning cost? <span class="faq-arrow">▼</span></button><div class="faq-answer">Pricing depends on size, material, condition. <strong>Send pictures for an accurate quote.</strong> See starting prices above.</div></div>
                <div class="faq-item"><button class="faq-question">How long does it take? <span class="faq-arrow">▼</span></button><div class="faq-answer">A standard couch takes about 45–90 minutes; large sectionals longer.</div></div>
                <div class="faq-item"><button class="faq-question">How long to dry? <span class="faq-arrow">▼</span></button><div class="faq-answer">Usually 4–8 hours, depending on fabric, airflow and humidity.</div></div>
                <div class="faq-item"><button class="faq-question">Can I sit on it immediately? <span class="faq-arrow">▼</span></button><div class="faq-answer">Wait until completely dry to avoid impressions or dirt transfer.</div></div>
                <div class="faq-item"><button class="faq-question">Do you remove every stain? <span class="faq-arrow">▼</span></button><div class="faq-answer">We treat carefully, but complete removal isn't always guaranteed. Some stains permanently change fabric.</div></div>
                <div class="faq-item"><button class="faq-question">Can you remove pet urine? <span class="faq-arrow">▼</span></button><div class="faq-answer">We offer pet stain & odor treatment. Results depend on depth of contamination.</div></div>
                <div class="faq-item"><button class="faq-question">Payment methods? <span class="faq-arrow">▼</span></button><div class="faq-answer">Cash, e-transfer, debit, credit card.</div></div>
                <div class="faq-item"><button class="faq-question">Cancellation policy? <span class="faq-arrow">▼</span></button><div class="faq-answer">24 hours' notice required. Late cancellations may incur a fee.</div></div>
            </div>
        </div>
    </section>

    <section class="section" id="quote">
        <div class="section-inner">
            <h2 class="section-title centered">Get a Free Quote</h2>
            <p class="section-subtitle centered">Send details and photos for a personalized estimate.</p>
            <div class="quote-form" style="max-width:700px;margin:0 auto;">
                <form id="quoteForm" onsubmit="handleQuoteSubmit(event)">
                    <div class="form-grid">
                        <div class="form-group"><label>Full Name *</label><input type="text" id="fullName" required></div>
                        <div class="form-group"><label>Phone *</label><input type="tel" id="phone" required></div>
                        <div class="form-group"><label>Email *</label><input type="email" id="email" required></div>
                        <div class="form-group"><label>City *</label><input type="text" id="city" required placeholder="Edmonton"></div>
                        <div class="form-group"><label>Furniture Type *</label><select id="furnitureType" required><option value="">Select...</option><option>Couch</option><option>Sectional</option><option>Loveseat</option><option>Recliner</option><option>Armchair</option><option>Dining chair</option><option>Office chair</option><option>Ottoman</option><option>Bench</option><option>Headboard</option><option>Other</option></select></div>
                        <div class="form-group"><label>Number of Items</label><input type="number" value="1" min="1"></div>
                        <div class="form-group"><label>Main Concern</label><select><option>General cleaning</option><option>Food stain</option><option>Drink stain</option><option>Pet stain</option><option>Pet odor</option><option>Unknown stain</option></select></div>
                        <div class="form-group full-width"><label>Upload Photos * <small>(JPG, PNG, HEIC)</small></label><input type="file" multiple accept="image/*,.heic,.heif" required></div>
                        <div class="form-group full-width"><label>Notes</label><textarea rows="3"></textarea></div>
                    </div>
                    <div style="text-align:center;margin-top:20px;"><button type="submit" class="btn btn-primary" style="font-size:1.1rem;padding:15px 40px;">Send Quote Request</button></div>
                    <p class="form-disclaimer">By submitting, you agree to our Privacy Policy.</p>
                </form>
            </div>
        </div>
    </section>

    <section class="section section-alt" id="booking">
        <div class="section-inner" style="text-align:center;">
            <h2 class="section-title centered">Book a Cleaning</h2>
            <div class="quote-form" style="max-width:600px;margin:0 auto;text-align:left;">
                <form id="bookingForm" onsubmit="handleBookingSubmit(event)">
                    <div class="form-grid">
                        <div class="form-group full-width"><label>Service *</label><select required><option>Couch Cleaning</option><option>Sectional Cleaning</option><option>Loveseat Cleaning</option><option>Recliner Cleaning</option></select></div>
                        <div class="form-group"><label>Preferred Date *</label><input type="date" id="bookDate" required></div>
                        <div class="form-group"><label>Preferred Time</label><select><option>Morning</option><option>Afternoon</option><option>Evening</option></select></div>
                        <div class="form-group full-width"><label>Full Name *</label><input type="text" required></div>
                        <div class="form-group"><label>Phone *</label><input type="tel" required></div>
                        <div class="form-group"><label>Email *</label><input type="email" required></div>
                        <div class="form-group full-width"><label>Service Address *</label><input type="text" required></div>
                    </div>
                    <div style="text-align:center;margin-top:20px;"><button type="submit" class="btn btn-secondary" style="font-size:1.1rem;padding:15px 40px;">Book Appointment</button></div>
                </form>
            </div>
        </div>
    </section>

    <section class="cta-section">
        <div class="section-inner">
            <h2 class="section-title">Ready to Refresh Your Furniture?</h2>
            <p>Send us pictures for a personalized quote. We serve Edmonton and surrounding areas.</p>
            <div class="cta-buttons">
                <a href="#quote" class="btn btn-primary btn-white" style="color:var(--accent);">Get a Free Quote</a>
                <a href="#booking" class="btn btn-secondary" style="background:#fff;color:var(--primary);">Book Now</a>
                <a href="tel:+15875669688" class="btn btn-outline" style="border-color:rgba(255,255,255,0.5);color:#fff;">📞 Call: +1 (587) 566-9688</a>
            </div>
        </div>
    </section>

    <section class="section" id="contact">
        <div class="section-inner" style="text-align:center;">
            <h2 class="section-title centered">Contact Us</h2>
            <p><strong>📞 Phone:</strong> <a href="tel:+15875669688">+1 (587) 566-9688</a></p>
            <p><strong>✉️ Email:</strong> info@cleanedmonton.com</p>
            <p><strong>📍 Service:</strong> Mobile — Edmonton & Surrounding Areas</p>
            <p><strong>🕐 Hours:</strong> Mon–Sat 8AM–7PM | Sun Closed</p>
            <div style="margin-top:16px;"><a href="#" class="btn btn-outline">📘 Facebook</a> <a href="#" class="btn btn-outline">📷 Instagram</a></div>
        </div>
    </section>

    <section class="section section-alt" id="disclaimers">
        <div class="section-inner">
            <h2 class="section-title centered" style="font-size:1.3rem;">Important Disclaimers</h2>
            <div class="intro-text" style="margin:0 auto;font-size:0.9rem;">
                <p><strong>Stain Disclaimer:</strong> Complete stain removal not guaranteed. Results depend on fabric, stain age, and previous attempts.</p>
                <p><strong>Odor Disclaimer:</strong> Odor reduction effectiveness depends on depth of contamination.</p>
                <p><strong>Fabric Disclaimer:</strong> Some fabrics may react differently; we test before cleaning.</p>
                <p><strong>Drying Disclaimer:</strong> Drying times are estimates and vary with conditions.</p>
            </div>
        </div>
    </section>

    <footer class="site-footer">
        <div class="section-inner">
            <div class="footer-links"><a href="#hero">Home</a> <a href="#services">Services</a> <a href="#pricing">Pricing</a> <a href="#gallery">Before & After</a> <a href="#about">About</a> <a href="#faq">FAQ</a> <a href="#contact">Contact</a> <a href="#">Privacy Policy</a> <a href="#">Terms</a> <a href="#">Cancellation Policy</a></div>
            <p>&copy; 2026 Clean Edmonton. All rights reserved. | Mobile Couch & Upholstery Cleaning in Edmonton, AB</p>
            <p>📞 +1 (587) 566-9688 | ✉️ info@cleanedmonton.com</p>
        </div>
    </footer>

    <div class="mobile-sticky-bar">
        <a href="#quote" class="btn btn-primary">Get a Free Quote</a>
        <a href="tel:+15875669688" class="btn btn-call">📞 Call Now</a>
    </div>

    <script>
        const hamburger = document.getElementById('hamburger');
        const mobileNav = document.getElementById('mobileNav');
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            mobileNav.classList.toggle('open');
            document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
        });
        mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            mobileNav.classList.remove('open');
            document.body.style.overflow = '';
        }));

        function initSliders() {
            document.querySelectorAll('.ba-comparison').forEach(container => {
                const afterImg = container.querySelector('.img-after');
                const handle = container.querySelector('.ba-handle');
                let dragging = false;
                function update(clientX) {
                    const rect = container.getBoundingClientRect();
                    let x = clientX - rect.left;
                    x = Math.max(0, Math.min(x, rect.width));
                    const pct = (x / rect.width) * 100;
                    afterImg.style.clipPath = 'inset(0 ' + (100-pct) + '% 0 0)';
                    handle.style.left = pct + '%';
                }
                function onStart(e) { dragging = true; e.preventDefault(); update(e.touches ? e.touches[0].clientX : e.clientX); }
                function onMove(e) { if (!dragging) return; update(e.touches ? e.touches[0].clientX : e.clientX); }
                function onEnd() { dragging = false; }
                container.addEventListener('mousedown', onStart);
                window.addEventListener('mousemove', onMove);
                window.addEventListener('mouseup', onEnd);
                container.addEventListener('touchstart', onStart, {passive: false});
                window.addEventListener('touchmove', onMove, {passive: false});
                window.addEventListener('touchend', onEnd);
                handle.addEventListener('mousedown', onStart);
                afterImg.style.clipPath = 'inset(0 50% 0 0)';
                handle.style.left = '50%';
            });
        }
        initSliders();

        document.querySelectorAll('.gallery-filters button').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.gallery-filters button').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.dataset.filter;
                document.querySelectorAll('.ba-pair').forEach(pair => {
                    pair.style.display = (filter === 'all' || pair.dataset.category === filter) ? '' : 'none';
                });
            });
        });

        document.querySelectorAll('.faq-item .faq-question').forEach(q => {
            q.addEventListener('click', () => {
                const item = q.parentElement;
                document.querySelectorAll('.faq-item').forEach(i => { if (i !== item) i.classList.remove('open'); });
                item.classList.toggle('open');
            });
        });

        document.querySelectorAll('a[href^="#"]').forEach(a => {
            a.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
                }
            });
        });

        function showToast(msg) {
            const t = document.createElement('div');
            t.className = 'toast';
            t.textContent = msg;
            document.body.appendChild(t);
            setTimeout(() => t.remove(), 3200);
        }
        function handleQuoteSubmit(e) { e.preventDefault(); showToast('✅ Quote request received!'); e.target.reset(); }
        function handleBookingSubmit(e) { e.preventDefault(); showToast('✅ Booking request received!'); e.target.reset(); }

        const dateInput = document.getElementById('bookDate');
        if (dateInput) {
            const today = new Date();
            dateInput.min = today.toISOString().split('T')[0];
        }
    </script>
</body>
</html>`;

    return new Response(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    });
  },
};
