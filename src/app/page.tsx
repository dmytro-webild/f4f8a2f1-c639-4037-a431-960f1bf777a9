"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import AboutMetric from '@/components/sections/about/AboutMetric';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Star, Users, Award, Heart, Sparkles, Zap, Truck, Phone } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="smallMedium"
      sizing="large"
      background="noise"
      cardStyle="subtle-shadow"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="Bakeistan Cuisine"
          navItems={[
            { name: "Home", id: "home" },
            { name: "Products", id: "products" },
            { name: "Custom Cakes", id: "custom-cakes" },
            { name: "About Us", id: "about" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          bottomLeftText="Rahim Yar Khan, Pakistan"
          bottomRightText="+92 334 4963553"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="Bakeistan Cuisine Bakery"
          description="Rahim Yar Khan's Favorite Custom Cake Bakery. Beautifully crafted cakes for birthdays, weddings, and special moments. ⭐ 4.9 from 81 happy customers."
          buttons={[
            { text: "📞 Call Now", href: "tel:+923344963553" },
            { text: "💬 Order on WhatsApp", href: "https://wa.me/923344963553" }
          ]}
          background={{ variant: "radial-gradient" }}
          imageSrc="http://img.b2bpic.net/free-photo/beautiful-elegant-cake-topper_23-2149232418.jpg"
          imageAlt="Beautiful custom decorated cakes display"
          mediaAnimation="opacity"
          buttonAnimation="slide-up"
          frameStyle="card"
        />
      </div>

      <div id="about-metrics" data-section="about-metrics">
        <AboutMetric
          title="Why Bakeistan Stands Out"
          metrics={[
            { icon: Star, label: "Customer Rating", value: "4.9/5.0" },
            { icon: Users, label: "Happy Customers", value: "81+" },
            { icon: Award, label: "Years Experience", value: "Women-Owned" },
            { icon: Heart, label: "Custom Designs", value: "Unlimited" }
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="featured-products" data-section="featured-products">
        <ProductCardOne
          title="Our Specialty Products"
          description="Each cake is handcrafted with premium ingredients and artistic passion. From intimate gatherings to grand celebrations, we deliver excellence on every plate."
          products={[
            { id: "birthday-cakes", name: "Custom Birthday Cakes", price: "From PKR 1,500", imageSrc: "http://img.b2bpic.net/free-photo/tasty-cake-with-birthday-candles_23-2149023601.jpg", imageAlt: "Colorful custom decorated birthday cake" },
            { id: "wedding-cakes", name: "Wedding Cakes", price: "Custom Quote", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-wedding-cake-white-background-with-space-right_24972-165.jpg", imageAlt: "Elegant tiered wedding cake" },
            { id: "brownies", name: "Chocolate Brownies", price: "From PKR 500", imageSrc: "http://img.b2bpic.net/free-photo/chocolate-brownie-portions-marble-background_123827-28435.jpg", imageAlt: "Rich fudgy chocolate brownies" },
            { id: "cupcakes", name: "Decorated Cupcakes", price: "From PKR 400", imageSrc: "http://img.b2bpic.net/free-photo/yummy-cupcake-jelly-cake_23-2147840402.jpg", imageAlt: "Vibrant frosted cupcakes" },
            { id: "korean-buns", name: "Korean Cream Buns", price: "From PKR 350", imageSrc: "http://img.b2bpic.net/free-photo/marmelades-cookies-small-serving-platter_114579-44900.jpg", imageAlt: "Soft fluffy Korean cream buns" },
            { id: "christmas-cakes", name: "Christmas Cakes", price: "From PKR 2,000", imageSrc: "http://img.b2bpic.net/free-photo/chocolate-cake-christmas-decorations-wooden-board-marble-background_114579-25750.jpg", imageAlt: "Festive decorated Christmas cake" }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          buttons={[
            { text: "Order Now", href: "https://wa.me/923344963553" }
          ]}
          useInvertedBackground={false}
        />
      </div>

      <div id="custom-cakes-form" data-section="custom-cakes-form">
        <FeatureCardThree
          title="Custom Cake Design Service"
          description="Have a unique vision? Our expert bakers transform your ideas into edible art. From themed cakes to personalized designs, we craft unforgettable centerpieces for your special moments."
          features={[
            { id: "consultation", title: "Free Consultation", description: "Discuss your cake theme, color preferences, and serving size with our design team", imageSrc: "http://img.b2bpic.net/free-photo/female-baker-shop-with-tablet-taking-online-orders_23-2150379584.jpg", imageAlt: "Professional bakery consultation space" }
          ]}
          gridVariant="one-large-right-three-stacked-left"
          animationType="slide-up"
          textboxLayout="split"
          tag="Bespoke Services"
          buttons={[
            { text: "Request Custom Cake", href: "https://wa.me/923344963553?text=I%20want%20to%20order%20a%20custom%20cake" },
            { text: "Call to Discuss", href: "tel:+923344963553" }
          ]}
          useInvertedBackground={true}
        />
      </div>

      <div id="why-choose" data-section="why-choose">
        <AboutMetric
          title="Why Choose Bakeistan?"
          metrics={[
            { icon: Sparkles, label: "Premium Quality", value: "Fresh Baked Daily" },
            { icon: Users, label: "Expert Team", value: "Specialist Bakers" },
            { icon: Zap, label: "Fast Service", value: "Rush Orders Available" },
            { icon: Truck, label: "Easy Access", value: "Delivery & Pickup" },
            { icon: Heart, label: "Women-Owned", value: "Local Business" },
            { icon: Award, label: "Top Rated", value: "4.9★ Rating" }
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Join over 80+ satisfied customers who trust Bakeistan for their special moments."
          testimonials={[
            { id: "review-1", name: "Ayesha Khan", role: "Birthday Celebration", testimonial: "The cake was absolutely delicious and beautifully designed. My daughter loved it! Will definitely order again for her next celebration.", imageSrc: "http://img.b2bpic.net/free-photo/stylish-young-redhead-woman-wearing-grey-checkered-shirt-laughing-out-loud-while-having-fun-indoors_273609-9041.jpg", imageAlt: "Customer Ayesha Khan", icon: Star },
            { id: "review-2", name: "Muhammad Hassan", role: "Wedding Cake Client", testimonial: "Ordered urgently and they prepared it faster than promised! The wedding cake was perfect and tasted amazing. Highly recommended.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-excited-person-portrait_23-2151186640.jpg", imageAlt: "Customer Muhammad Hassan", icon: Star },
            { id: "review-3", name: "Fatima Mirza", role: "Corporate Event", testimonial: "Professional service from start to finish. The cupcakes were fresh and the presentation was elegant. Best bakery in Rahim Yar Khan!", imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-talking-phone_23-2149002414.jpg", imageAlt: "Customer Fatima Mirza", icon: Star },
            { id: "review-4", name: "Ahmed Malik", role: "Regular Customer", testimonial: "I've ordered from them multiple times. Consistency in quality, taste, and service is excellent. Always fresh, always delicious.", imageSrc: "http://img.b2bpic.net/free-vector/family-background-with-nice-message_23-2147605276.jpg", imageAlt: "Customer Ahmed Malik", icon: Star },
            { id: "review-5", name: "Zainab Sheikh", role: "Birthday Party", testimonial: "Amazing brownies and cupcakes! My guests couldn't stop talking about them. The packaging was also very nice and professional.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-young-male-baker-front-baked-croissant-shelves_23-2148189030.jpg", imageAlt: "Customer Zainab Sheikh", icon: Star },
            { id: "review-6", name: "Bilal Ahmed", role: "Customized Cake", testimonial: "They brought my vision to life! The custom cake was exactly what I imagined. Team was helpful and accommodating throughout.", imageSrc: "http://img.b2bpic.net/free-photo/woman-bed-showing-ok-gesture_23-2147767529.jpg", imageAlt: "Customer Bilal Ahmed", icon: Star }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted By Local Community"
          description="Join hundreds of satisfied customers who have made Bakeistan their go-to bakery for celebrations and sweet moments."
          names={[
            "Google Reviews Verified",            "Facebook Recommended",            "Instagram Featured",            "Local Directory Trusted",            "Quality Certified",            "Women-Owned Business",            "Community Favorite"
          ]}
          logos={[
            "http://img.b2bpic.net/free-vector/patented-label-collection-design_23-2149696721.jpg",            "http://img.b2bpic.net/free-vector/flat-design-installment-stamps_23-2149409059.jpg",            "http://img.b2bpic.net/free-vector/thank-you-your-attention-sign-deesign_23-2150305766.jpg",            "http://img.b2bpic.net/free-vector/gradient-outlet-label-collection_23-2149733222.jpg",            "http://img.b2bpic.net/free-vector/premium-quality-stamp-set_24908-55733.jpg",            "http://img.b2bpic.net/free-photo/women-support-group_53876-98146.jpg",            "http://img.b2bpic.net/free-vector/abstract-coloured-logo_1025-890.jpg"
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          showCard={true}
        />
      </div>

      <div id="contact-faq" data-section="contact-faq">
        <ContactFaq
          ctaTitle="Ready to Order?"
          ctaDescription="Contact us now to place your order. We're available via phone, WhatsApp, or visit us in person."
          ctaButton={{ text: "📞 Call +92 334 4963553", href: "tel:+923344963553" }}
          ctaIcon={Phone}
          animationType="slide-up"
          faqs={[
            { id: "faq-1", title: "What are your delivery options?", content: "We offer home delivery, drive-through pickup, and walk-in orders. Delivery is available within Rahim Yar Khan for orders over PKR 2,000. Contact us to arrange your preferred option." },
            { id: "faq-2", title: "How far in advance should I order?", content: "For custom cakes, we recommend 2-3 days advance notice. However, we also offer rush orders available within 24 hours for additional service charges. Call us to check availability." },
            { id: "faq-3", title: "Do you have any dietary options?", content: "Yes! We can prepare sugar-free, eggless, and dairy-free cakes upon request. Minimum notice of 2 days is required. Call or WhatsApp us to discuss your dietary needs." },
            { id: "faq-4", title: "What is your cancellation policy?", content: "Cancellations made 48 hours before delivery receive a full refund. Cancellations within 48 hours may incur 50% cancellation charges. Custom orders have different terms - please inquire." },
            { id: "faq-5", title: "Can I customize flavors and designs?", content: "Absolutely! All cakes can be customized with your choice of flavor, frosting, and design. Our team works with you to create your perfect cake. Call us for a free consultation." },
            { id: "faq-6", title: "What is your location and business hours?", content: "We're located at House #1 Street 1, Gulshan-e-Umer, Rahim Yar Khan 64200, Pakistan. Call us at +92 334 4963553 to confirm business hours or place an order." }
          ]}
          useInvertedBackground={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Contact",              items: [
                { label: "📞 Phone: +92 334 4963553", href: "tel:+923344963553" },
                { label: "💬 WhatsApp Order", href: "https://wa.me/923344963553" },
                { label: "📍 Rahim Yar Khan, Pakistan", href: "#" }
              ]
            },
            {
              title: "Quick Links",              items: [
                { label: "Home", href: "#home" },
                { label: "Products", href: "#products" },
                { label: "Custom Cakes", href: "#custom-cakes" },
                { label: "Reviews", href: "#reviews" }
              ]
            },
            {
              title: "About",              items: [
                { label: "Women-Owned Business", href: "#about" },
                { label: "Premium Quality", href: "#" },
                { label: "Fresh Baked Daily", href: "#" },
                { label: "Local Favorite", href: "#" }
              ]
            },
            {
              title: "Order Now",              items: [
                { label: "Birthday Cakes", href: "https://wa.me/923344963553?text=I%20want%20to%20order%20a%20birthday%20cake" },
                { label: "Wedding Cakes", href: "https://wa.me/923344963553?text=I%20want%20to%20order%20a%20wedding%20cake" },
                { label: "Custom Design", href: "https://wa.me/923344963553?text=I%20want%20a%20custom%20design" },
                { label: "Delivery Order", href: "https://wa.me/923344963553" }
              ]
            }
          ]}
          copyrightText="© 2024 Bakeistan Cuisine Bakery. Women-Owned Business. All Rights Reserved. House #1 Street 1, Gulshan-e-Umer, Rahim Yar Khan 64200, Pakistan."
        />
      </div>
    </ThemeProvider>
  );
}