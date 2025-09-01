const qs = (selector) => document.querySelector(selector);

const page1 = qs("#page1");
const page2 = qs("#page2");
const page3 = qs("#page3"); // Add page3
const page1YesBtn = qs("#page1-yes-btn");
const page1NoBtn = qs("#page1-no-btn");

const question = page2.querySelector(".question");
const gif = page2.querySelector(".gif");
const yesBtn = page2.querySelector(".yes-btn");
const noBtn = page2.querySelector(".no-btn");

const goToPage2 = () => {
  page1.style.display = "none";
  page2.style.display = "flex"; // Assuming .wrapper uses flexbox for centering

  // Disable buttons initially
  yesBtn.disabled = true;
  noBtn.disabled = true;

  setTimeout(() => {
    // Enable buttons after 0.5 seconds
    yesBtn.disabled = false;
    noBtn.disabled = false;
    // Add mouseover listener to page2's noBtn only when page2 is displayed
    noBtn.addEventListener("mouseover", handleNoMouseOver);
  }, 500); // 0.5 seconds delay
};

const handleYesClick = () => {
  question.innerHTML = "Yeahhhhhhhhhhh! See you on our next date!";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";

  // Remove the 'mouseover' event listener from noBtn
  noBtn.removeEventListener("mouseover", handleNoMouseOver);

  // Remove the noBtn from the DOM
  noBtn.remove();

  // Define predefined romantic date ideas
  const dateIdeas = [
    "Cook a romantic dinner together",
    "Go for a moonlit walk on the beach",
    "Have a picnic in the park",
    "Take a dance class together",
    "Stargaze in the backyard",
    "Take a hot air balloon ride",
    "Explore a botanical garden",
    "Attend a live outdoor concert",
    "Visit an art gallery",
    "Go on a weekend getaway to a cozy cabin",
    "Attend a cooking class together",
    "Plan a movie marathon night at home",
    "Take a scenic train ride",
    "Go horseback riding",
    "Visit a local winery for a wine tasting",
    "Go kayaking or canoeing",
    "Attend a comedy show",
    "Take a scenic hike and have a picnic",
    "Go on a sunrise or sunset photo shoot",
    "Attend a local farmers' market",
    "Explore a historic neighborhood",
    "Take a dance lesson together",
    "Have a DIY spa night at home",
    "Go on a bike ride together",
    "Plan a themed dinner night at home",
    "Attend a live theater performance",
    "Go on a scenic drive",
    "Visit a local chocolate or dessert shop",
    "Take a pottery or ceramics class",
    "Attend a local sports game",
    "Plan a day trip to a nearby city",
    "Have a karaoke night at home or at a local venue",
    "Attend a local festival or fair",
    "Go on a scenic boat tour",
    "Visit a local bookstore and pick out books for each other",
    "Have a picnic in a local park",
    "Take a photography workshop together",
    "Explore a new hiking trail",
    "Attend a wine and paint night",
    "Visit a nearby beach or lake",
    "Plan a game night with board games or card games",
    "Take a pottery or ceramics class",
    "Attend a trivia night at a local bar",
    "Go on a hot air balloon ride",
    "Take a scenic train ride",
    "Plan a movie night with your favorite films",
    "Go on a helicopter tour",
    "Attend a live outdoor concert",
    "Visit a local art gallery",
    "Go on a brewery tour",
    "Take a scenic drive through the countryside",
    "Attend a live comedy show",
    "Visit a local botanical garden",
    "Have a picnic in a vineyard",
    "Take a cooking class together",
    "Go on a river cruise",
    "Plan a weekend getaway to a cozy cabin",
    "Attend a dance class together",
    "Take a day trip to a nearby national park",
    "Go on a bike ride along a scenic trail",
    "Visit a local museum",
    "Have a DIY spa day at home",
    "Attend a live theater performance",
    "Go on a scenic hike and have a picnic",
    "Take a painting class together",
    "Attend a local farmers' market",
    "Explore a historic neighborhood",
    "Go horseback riding",
    "Have a themed dinner night at home",
    "Attend a local sports game",
    "Plan a day trip to a nearby city",
    "Have a karaoke night at home or at a local venue",
    "Attend a wine and cheese tasting",
    "Visit a local chocolate or dessert shop",
    "Take a pottery or ceramics class",
    "Attend a live music performance",
    "Go on a boat tour",
    "Visit a local bookstore and pick out books for each other",
    "Take a photography workshop together",
    "Explore a new hiking trail",
    "Attend a wine and paint night",
    "Visit a nearby beach or lake",
    "Plan a game night with board games or card games",
    "Take a pottery or ceramics class",
    "Attend a trivia night at a local bar",
    "Go on a hot air balloon ride",
    "Take a scenic train ride",
    "Plan a movie night with your favorite films",
    "Go on a helicopter tour",
    "Attend a live outdoor concert",
    "Visit a local art gallery",
    "Go on a brewery tour",
    "Take a scenic drive through the countryside",
    "Attend a live comedy show",
    "Visit a local botanical garden",
    "Have a picnic in a vineyard",
    "Take a cooking class together",
    "Go on a river cruise",
    "Plan a weekend getaway to a cozy cabin",
    "Attend a dance class together",

    // Add more date ideas as needed
  ];

  // Create and style a new button for Let's Go!
  const letsGoBtn = document.createElement("button");
  letsGoBtn.textContent = "Let's Go!";
  letsGoBtn.classList.add("letsgo-btn", "yes-btn"); // Add yes-btn class for consistent styling
  // Center within btn-group and move right
  letsGoBtn.style.position = "static"; // Allow it to flow naturally within flex container
  letsGoBtn.style.left = "";
  letsGoBtn.style.top = "";
  letsGoBtn.style.transform = "";
  letsGoBtn.style.width = "150px"; // Adjust the width to match other buttons
  letsGoBtn.style.marginLeft = "-5px"; // Move left by 10 pixels (from current 5px right)
  letsGoBtn.style.marginTop = "-15px"; // Move up by 15 pixels

  // Add a click event listener to prompt the user with random romantic date ideas
  letsGoBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * dateIdeas.length);
    const selectedDateIdea = dateIdeas[randomIndex];

    alert(`How about this romantic date idea: ${selectedDateIdea}`);
  });

  // Replace yesBtn with the new letsGoBtn
  yesBtn.replaceWith(letsGoBtn);

  // Disable letsGoBtn initially
  letsGoBtn.disabled = true;

  setTimeout(() => {
    // Enable letsGoBtn after 0.5 seconds
    letsGoBtn.disabled = false;
  }, 500); // 0.5 seconds delay
};

const handleNoMouseOver = () => {
  const { width, height } = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - width;
  const maxY = window.innerHeight - height;

  noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
};

page1YesBtn.addEventListener("click", goToPage2);
page1NoBtn.addEventListener("click", () => {
  page1.style.display = "none";
  page3.style.display = "flex";
});

yesBtn.addEventListener("click", handleYesClick);
