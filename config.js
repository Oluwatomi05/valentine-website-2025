// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Omolabake",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "NLS | Payment Receipt Confirmation - PDF",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['📚', '📖']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "In the story of us, are you ready for the ultimate plot twist?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I don't like you, I love you! ❤️"           // Secret hover message
        },
        second: {
            text: "How many pages of our future should we write together?",                          // For the love meter
            startText: "This many chapters!",                                   // Text before the percentage
            nextBtn: "Turn the Page ❤️"                                         // Text for the next button
        },
        third: {
            text: "Omolabake, will you be the leading lady in my next chapter and be my Valentine?", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "A Sidney Sheldon bestseller love! 🥰🚀💝",  // Shows when they go past 5000%
        high: "To infinity and beyond the final chapter! 🚀💝",              // Shows when they go past 1000%
        normal: "And beyond! 🥰"                        // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "The Master of the Game has been won! 🎉💝💖", 
        message: "You're the best main character I could ever ask for. Now come get your gift—the sequel involves a big hug!",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#4B0082",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#1a0033",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#9370DB",     // Button color (should stand out against the background)
        buttonHover: "#8A2BE2",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#E6E6FA"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
