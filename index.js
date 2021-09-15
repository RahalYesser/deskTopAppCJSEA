const electron = require("electron");

const { ipcRenderer } = electron;

// add to members table

document.addEventListener("DOMContentLoaded", () => {
  ipcRenderer.send("LoadMembersList");
  ipcRenderer.on("MembersListLoaded", (evnt, result) => {
    console.log(result);

    // let trow = document.getElementById("memberstable")
    
    result.map((s)=>{
        document.getElementById("memberstable").innerHTML += `<tr class="border-b border-gray-200 bg-white">
                  <td class="py-3 px-6 text-left whitespace-nowrap">
                    <div class="items-center">
                      <span class="">${s.id}</span>
                    </div>
                  </td>
    
                  <td class="py-3 px-6 text-left whitespace-nowrap">
                    <div class="items-center">
                      <span class="">${s.name}</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-left">
                    <div class="items-center">
                      <span>${s.lastname}</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex items-center justify-center">
                    ${s.email}
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <span class="py-1 px-3">${s.phone}</span>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex item-center justify-center">
                      
                      <button>
                        <div
                          class="
                            w-4
                            mr-2
                            transform
                            text-purple-500
                            hover:scale-110
                          "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </div>
                      </button>
                      <button>
                        <div
                          class="w-4 mr-2 transform text-red-500 hover:scale-110"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </td>
                </tr>` 
    })



    // const membersTblebody = result.map((s) => {
    //   return (`<tr class="border-b border-gray-200 bg-white">
    //           <td class="py-3 px-6 text-left whitespace-nowrap">
    //             <div class="items-center">
    //               <span class="">${s.id}</span>
    //             </div>
    //           </td>

    //           <td class="py-3 px-6 text-left whitespace-nowrap">
    //             <div class="items-center">
    //               <span class="">${s.name}</span>
    //             </div>
    //           </td>
    //           <td class="py-3 px-6 text-left">
    //             <div class="items-center">
    //               <span>${s.lastname}</span>
    //             </div>
    //           </td>
    //           <td class="py-3 px-6 text-center">
    //             <div class="flex items-center justify-center">
    //             ${s.email}
    //             </div>
    //           </td>
    //           <td class="py-3 px-6 text-center">
    //             <span class="py-1 px-3">${s.phone}</span>
    //           </td>
    //           <td class="py-3 px-6 text-center">
    //             <div class="flex item-center justify-center">
                  
    //               <button>
    //                 <div
    //                   class="
    //                     w-4
    //                     mr-2
    //                     transform
    //                     text-purple-500
    //                     hover:scale-110
    //                   "
    //                 >
    //                   <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     fill="none"
    //                     viewBox="0 0 24 24"
    //                     stroke="currentColor"
    //                   >
    //                     <path
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       stroke-width="2"
    //                       d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
    //                     />
    //                   </svg>
    //                 </div>
    //               </button>
    //               <button>
    //                 <div
    //                   class="w-4 mr-2 transform text-red-500 hover:scale-110"
    //                 >
    //                   <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     fill="none"
    //                     viewBox="0 0 24 24"
    //                     stroke="currentColor"
    //                   >
    //                     <path
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       stroke-width="2"
    //                       d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    //                     />
    //                   </svg>
    //                 </div>
    //               </button>
    //             </div>
    //           </td>
    //         </tr>`)
    // });
    // document.querySelector("#memberstable").innerHTML = membersTblebody;

  });
});


