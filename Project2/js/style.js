// const tags = ` <span>HTML/CSS</span>
//   <span>JavaScript</span>
//   <span>Ruby On Rails</span>`;
// const cards = document.querySelectorAll(".card");
// cards.forEach((card) => {
//   const tagscontainer = card.querySelector(".commontags");
//   tagscontainer.innerHTML = tags;
// });

// const commonpara=`<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
// <br>
// <br>
// Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
// `
// const cardpara=document.querySelectorAll('.card');
// cardpara.forEach((p)=>{
//     const paracontainer=p.querySelector('.pop-para')
//     paracontainer.innerHTML=commonpara;
// })

// const buttons=
//     ` <button>See Live</button>
//         <button>See Source</button>`

// const button=document.querySelectorAll('.card')
// button.forEach((btn)=>{
//     const poplive=btn.querySelector('.popupbtn')
//     poplive.innerHTML=buttons;
// })
// ==== Common reusable content ====

// Common tags
const tagsHTML = `
  <span>HTML/CSS</span>
  <span>JavaScript</span>
  <span>Ruby On Rails</span>
`;

// Common paragraph
const paragraphHTML = `
  <p>
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br>
<br>
Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
  </p>
`;

// Common buttons
const buttonsHTML = `
  <button>See Live</button>
  <button>See Source</button>
`;

// ==== Apply same content to every card ====
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.querySelector('.commontags').innerHTML = tagsHTML;
  card.querySelector('.pop-para').innerHTML = paragraphHTML;
  card.querySelector('.popupbtn').innerHTML = buttonsHTML;
});
