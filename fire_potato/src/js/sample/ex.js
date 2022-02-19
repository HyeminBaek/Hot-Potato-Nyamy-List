const getJobRender = (data) => {
    const targetDiv = document.getElementById("job-list-div");
  
    let renderResult = ""; // string (html)
    for (let index = 0; index < data.length; index++) {
      const { title, company, location, link, id } = data[index];
  
      renderResult += `
        <div class="d-style btn bgc-white my-2 py-3 shadow-sm">
            <div class="row align-items-center">
                <div class="col-12 col-md-4">
                    <h4 class="job--desc--head text-600">
                        ${title}
                    </h4>
                </div>
  
                <ul class="list-unstyled mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left my-4 my-md-0">
                    <li>
                        <label class="job--desc">Company: </label>
                        <span>
                            <span class="text-110">${company}</span>
                        </span>
                    </li>
                    <li class="mt-25">
                        <label class="job--desc">Company Location: </label>
                        <span class="text-110">
                            ${location}
                        </span>
                    </li>
  
                    <li class="mt-25">
                        <a class="job--desc" href="${link}" target="_blank">See details</a>
                    </li>
                </ul>
  
                <div class="col-12 col-md-4 text-center">
                    <button class="btn job--recommend" target-data-id="${id}" target-data-keyword="${String(current_keyword).trim()}">
                      Recommend
                    </button>
                </div>
            </div>
        </div>
      `;
    } // end of for
  
    targetDiv.innerHTML = renderResult
  
    // 검색했으면 이동 시켜야지
    const location = document.querySelector("#job-list-div").offsetTop;
    window.scrollTo({top:location, behavior:'smooth'});
  
    // 검색 후 동적으로 추가된 job list에 updateRecommend Event 추가 
    addUpdateRecommendEvent()
  };