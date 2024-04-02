let text1 = "In the ever-expanding expanse of human existence, we find ourselves traversing a myriad of experiences, each moment a thread woven into the fabric of our lives. From the bustling city streets to the tranquil embrace of nature, our journey unfolds, rich with diversity and discovery. In the digital age, technology serves as both a tool and a conduit, connecting us across vast distances and enabling the exchange of ideas with unprecedented ease. Through the tap of a screen or the click of a mouse, we navigate virtual realms, exploring realms of knowledge and creativity that transcend physical boundaries.Yet, amidst the rapid pace of progress, we must not lose sight of our humanity. In the quiet moments of reflection, we find solace in the bonds we share with one another, rooted in empathy, compassion, and understanding. It is through these connections that we derive meaning and purpose, finding strength in our collective journey through the uncertainties of life. As we stand at the precipice of the future, let us embrace the challenges that lie ahead with courage and conviction. Let us harness the power of innovation to forge a path towards a brighter tomorrow, where opportunity abounds for all who dare to dream.For in the tapestry of existence, it is our shared experiences, our triumphs and tribulations, that unite us as one human family. And in the vastness of the cosmos, may we find inspiration to continue our quest for knowledge, for understanding, and for a better world for generations to come."
let text2 = "In the labyrinth of existence, we navigate the twists and turns of fate, each decision shaping the course of our journey. From the cradle to the grave, we are bound by the tapestry of time, our lives intertwined with those around us. Through love and loss, triumph and defeat, we forge our path with resilience and determination. Amidst the chaos of the world, we seek moments of clarity and connection, finding solace in the beauty of nature and the warmth of human companionship. In the embrace of loved ones, we find refuge from the storms of life, drawing strength from the bonds that unite us. Yet, even in our darkest hours, hope flickers like a candle in the night, guiding us towards a brighter tomorrow. With each sunrise, we are reminded of the endless possibilities that await us, beckoning us to seize the day and embrace the unknown. As we journey through the vast expanse of existence, let us cherish each moment as a precious gift, savoring the beauty of the world and the richness of human experience. For in the tapestry of life, every thread is sacred, every encounter a chance for growth and enlightenment."
let text3 = "In the symphony of life, each soul contributes a unique melody, weaving together harmonies that resonate through the ages. From the first breath of infancy to the final whisper of old age, our existence is a testament to the power of creation and the beauty of expression.As we journey through the passage of time, we encounter trials and tribulations that test our resolve and challenge our perceptions. Yet, it is in the face of adversity that we discover the depths of our strength and the resilience of the human spirit.Across cultures and continents, we are united by a common thread – the universal quest for meaning and purpose. Whether through art or science, religion or philosophy, we seek to unravel the mysteries of existence and understand our place in the cosmos.And though our paths may diverge and our destinies unfold in different ways, we are bound together by the shared experience of being alive. In moments of joy and sorrow, triumph and defeat, we find solidarity in our humanity, knowing that we are never truly alone.So let us embrace the journey with open hearts and open minds, embracing the unknown with courage and curiosity. For in the tapestry of life, every thread is a story waiting to be told, every note a melody waiting to be sung."
let seconds = 0;

function showText() {
    var container = document.getElementById("container");
    
    // Create and append the first card
    var el = document.createElement("div");
    el.className = "card1";
    el.id = "card1";
    el.innerHTML = text1;
    container.append(el);
    
    // Create and append the second card
    var el2 = document.createElement("div");
    el2.className = "card2";
    el2.id = "card2";
    el2.innerHTML = 'Write the text below:';
    container.append(el2);
    
    // Create and append the textarea
    var textarea = document.createElement("textarea");
    textarea.className = "input"; 
    textarea.id = "input";
    textarea.rows = 5;
    container.appendChild(textarea);
}

function incrementSeconds() {
    ++seconds;
    if (seconds === 2) {
        var el3 = document.createElement("div");
        el3.className = "winner";
        el3.id = "winner";
        el3.innerHTML = 'Finished test';
        container.append(el3);
        document.getElementById('input').disabled = true;
    }
}