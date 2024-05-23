import {ShoesMenData} from '../data/shoes-detail-men.js';

const dataSource  = {
  "shoes1": ShoesMenData
}


const ShoesDetailContainer = (contents) => {
  return `
  ${contents.map((content) => `
    <div
        class="box-border md:flex justify-between gap-3 mb-[20rem] max-md:mb-[5rem]" 
      >
        <!-- product image - small vertical  -->
        <div class="absolute inline-block z-10 max-md:hidden" id="slider-vertical">
          ${content.verticalImgs.map(verticalImg => `
            <div class="vertical-product-img" id="vertical-img1">
              <img
                class="top-[50%] h-auto w-full object-cover"
                src="${verticalImg.verticalImg1}"
                alt="shr100xm_440_1"
              />
            </div>
            <div class="vertical-product-img" id="vertical-img2">
              <img
                src="${verticalImg.verticalImg2}"
                alt=""
              />
            </div>
          `).join('')}
        </div>

        <!-- Product image  -->
        <div class="w-[600px] max-w-[90%] mx-auto relative">
          <div id="productSlider" class="overflow-x-auto flex">
            <div class="product-img-slide relative">
              <img
                class="top-[50%] h-auto w-full object-cover max-md:scale-140"
                src="../assets/images/running-page/shr100xm_440_1.webp"
                alt="shr100xm_440_1"
              />
            </div>
            <div class="product-img-slide relative">
              <img
                class="max-w-full top-[50%] h-auto w-full object-cover"
                src="https://www.yonex.com/media/catalog/product/s/h/shr100xm_440_sl_2.png?quality=80&fit=bounds&height=819&width=600&canvas=600:819"
                alt="shr100xm_440_1"
              />
            </div>
          </div>
          <button
            id="prevBtn"
            class="absolute w-[80px] left-0 top-1/2 transform -translate-y-1/2 hidden z-[10000]"
          >
            <img
              src="../assets/images/running-page/carrot_L.svg"
              alt=""
              class="w-[30px] opacity-30"
            />
          </button>
          <button
            id="nextBtn"
            class="absolute w-[80px] right-0 top-1/2 transform -translate-y-1/2 hidden z-[10000]"
          >
            <img
              src="../assets/images/running-page/carrot_R.svg"
              alt=""
              class="w-[30px] opacity-30"
            />
          </button>

          <!-- <div
            class="bottom-navigaion flex justify-center items-center md:hidden"
          >
            <div class="dots-container flex gap-3 p-4">
              <div
                class="dot-status dot-active relative flex justify-center items-center"
              >
                <div class="dot-nav"></div>
              </div>

              <div
                class="dot-status w-[24px] h-[24px] rounded-full relative flex justify-center items-center"
              >
                <div
                  class="dot-nav bg-[#adadad] rounded-full round-[12px] w-[6px] h-[6px]"
                ></div>
              </div>
            </div>
          </div> -->
        </div>

        <div
          class="bottom-navigaion flex justify-center items-center md:hidden pt-[130px]"
        >
          <div class="dots-container flex gap-3 p-4">
            <div
              class="dot-status dot-active relative flex justify-center items-center"
            >
              <div class="dot-nav"></div>
            </div>

            <div
              class="dot-status w-[24px] h-[24px] rounded-full relative flex justify-center items-center"
            >
              <div
                class="dot-nav bg-[#adadad] rounded-full round-[12px] w-[6px] h-[6px]"
              ></div>
            </div>
          </div>
        </div>

        <!-- start product detail -->

        <div class="md:max-w-[360px] md:w-[40%]">
          <div class="mt-[32px] max-w-[642px]">
            <h1
              class="uppercase text-[26px] md:text md:text-[36px] md:text-start text-center"
            >
              <span class="tracking-[5px] md:tracking-[7px]"
                >${content.productName}</span
              >
            </h1>
            <p class="text-[#4f4a47] mt-2">
            ${content.productDes}
            </p>
          </div>

          <div class="">
            <button
              class="flex w-full relative mt-[30px] pt-[13px] pb-[15px]"
            >
              <p class="font-semibold uppercase text-[14px] text-[#4f4a47]">
                colors:
              </p>
              <span class="text-[#737a7e] text-[14px] pl-[8px]"
                >${content.productColor}</span
              >
            </button>
          </div>

          <div class="flex max-md:justify-start gap-2 max-w-[800px] mx-auto">
            ${content.productColorImgs.map((productColorImg) => `
              <div class="product-img-group">
                <a href="">
                  <img
                    class="w-[50px] h-[50px] bg-white border border-[#dadada] hover:border-blue-900 hover:border-2 relative"
                    src="${productColorImg}"
                    alt=""
                  />
                </a>
              </div>
            `).join('')}
            
          </div>
          <button
            class="specsBtn flex justify-between w-full relative mt-[60px] pt-[13px] pb-[15px]"
          >
            <span class="font-semibold uppercase text-[14px]">Specs</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="minusIcon w-4 h-6 absolute right-3 top-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 12h14"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="plusIcon w-4 h-6 hidden absolute right-3 top-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>

          <!-- start product detail card -->

          <div class="detailCard text-[14px] font-sans bg-white border-[1px] text-secondary-400 mb-6 h-auto duration-500">
            <table class="table-container w-auto text-[12px]">
              <tbody>
                ${content.productSpec.map((spec) => `
                  <tr>
                    <td class="pt-[10px] px-[20px] pb-[10px]">${spec.specCaption}</td>
                    <td class="pt-[10px] px-[20px] pb-[10px]">${spec.specInfo}</td>
                  </tr>
                `).join('')}
                
              ${content.productSpec.map((item) => ``).join('')}
              </tbody>
            </table>
          </div>

          <!-- end product detail card -->

          <div
            class="font-sans font-semibold text-[14px] flex md:hidden text-secondary-400"
          >
            <a class="flex gap-2 hover:underline" href="">
              <img
                class="w-[30px] h-[27px]"
                src="../assets/images/icon/compare.svg"
                alt=""
              />
              <span class="">Add to compare</span>
            </a>
          </div>

          <!-- start icon container -->
          <div
            class="flex justify-center md:justify-start gap-2 max-w-[800px] mx-auto"
          >
            <a href="">
              <img
                class="w-[30px] h-[30px]"
                src="../assets/images/icon/icon-facebook.svg"
                alt=""
              />
            </a>
            <a class="" href="">
              <img
                class="w-[30px] h-[30px]"
                src="../assets/images/icon/icon-twitter.svg"
                alt=""
              />
            </a>
            <a href="">
              <img
                class="w-[30px] h-[30px]"
                src="../assets/images/icon/icon-link.svg"
                alt=""
              />
            </a>
          </div>
          <!-- end icon container -->
        </div>
    </div>
  
  `).join("")}
  
  
  
  `
}

class ShoesDetails extends HTMLElement {
  connectedCallback(){
    const dataAtt = this.getAttribute("data-source");
    const dataSourceKey = dataSource[dataAtt];
    this.innerHTML = ShoesDetailContainer(dataSourceKey)
  }
}

customElements.define('shoes-details', ShoesDetails);


// start product slider
const productSlider = document.getElementById("productSlider");
const sliderVertical = document.getElementById("slider-vertical");
const verticalImg1 = document.getElementById("vertical-img1");
const verticalImg2 = document.getElementById("vertical-img2");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const productImgSlide = productSlider.querySelectorAll(".product-img-slide");
const productImgVertical = productSlider.querySelectorAll(".vertical-product-img");
const dots = document.querySelectorAll(".dot-status");
let currentIndex = 0;

function showImage(index) {
  productImgSlide.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}


function activeDot(index) {
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("dot-active");
    } else {
      dot.classList.remove("dot-active");
    }
  });
}

// Initial display
showImage(currentIndex);
activeDot(currentIndex);

// Event listeners for next and previous buttons
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + 2) % 2;
  showImage(currentIndex);
  activeDot(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % 2;
  showImage(currentIndex);
  activeDot(currentIndex);
});

verticalImg1.addEventListener("click", () => {
  currentIndex = 0;
  showImage(currentIndex);
})

verticalImg2.addEventListener("click", () => {
  currentIndex = 1;
  showImage(currentIndex);
})


// Event listeners for mouse enter and mouse leave on images
productImgSlide.forEach((slide, i) => {
  slide.addEventListener("mouseenter", () => {
    if (i === 0) {
      prevBtn.classList.add("hidden");
      nextBtn.classList.remove("hidden");
    } else if (i === 1) {
      nextBtn.classList.add("hidden");
      prevBtn.classList.remove("hidden");
    }
  });

  slide.addEventListener("mouseleave", () => {
    prevBtn.classList.add("hidden");
    nextBtn.classList.add("hidden");
  });
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentIndex = i;
    showImage(currentIndex);
    activeDot(currentIndex);
  });
});


const specsBtn = document.querySelector('.specsBtn')
const detailCard = document.querySelector('.detailCard')
const plusIcon = document.querySelector('.plusIcon')
const minusIcon = document.querySelector('.minusIcon')
const tableContainer = document.querySelector('.table-container')
function showCard(){
  detailCard.classList.toggle('h-[0px]')
  detailCard.classList.toggle('overflow-hidden')
  tableContainer.classList.toggle('hidden')
  plusIcon.classList.toggle('hidden')
  
}
specsBtn.addEventListener('click', showCard)

