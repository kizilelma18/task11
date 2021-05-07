console.log('hey');
//selecting required element
const div =document.createElement('div');
div.setAttribute('class','pagination');
const ulTag = document.createElement('ul');
document.body.append(div);
div.append(ulTag);

let totalPages = 20;
function element(totalPages, page){
 
    let liTag = '';
    let activeLi ;
    let beforePages = page -1;
    let afterPages = page +1;
    
    if(page>1){
        liTag += `<li class='btn prev' onclick="element(totalPages,${page-1})"><span><i class="fa fa-angle-left" aria-hidden="true"></i> Prev</span></li>`;

    }
    if(page>2){
        liTag += `<li class='numb' onclick='element(totalPages,1)'>1</li>`;
        if(page>3){
            liTag += `<li class='dots'>...</li>`;
        }
    }
    
    if(page == totalPages){
        beforePages = beforePages -2;
        }else if(page == totalPages -1){
        beforePages = beforePages -1;
        }

        if(page==1){
            afterPages = afterPages +2;
        }else if(page == 2){
            afterPages = afterPages +1;
        }

    for(let pageLength = beforePages; pageLength<=afterPages;pageLength++){
        if(pageLength>totalPages){
            continue;
        }
        if(pageLength == 0){
            pageLength = pageLength + 1;
        }
        if(page == pageLength){
         activeLi = 'active';
        }else{
         activeLi = '';
        }
      liTag += `  <li class='numb ${activeLi}' onclick='element(totalPages,${pageLength})'>${pageLength}</li>`
    }

    if(page<totalPages -1){
       
        if(page<totalPages -2){
            liTag += `<li class='dots'>...</li>`;
        }
        liTag += `<li class='numb' onclick='element(totalPages,${totalPages})'>${totalPages}</li>`;
    }
    if(page<totalPages){
        liTag += `<li class='btn next' onclick="element(totalPages,${page+1})"><span><i class="fa fa-angle-right" aria-hidden="true"></i> Next</span></li>`;
    }
    ulTag.innerHTML=liTag;
}
element(totalPages,5);
