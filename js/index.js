$(document).ready(
    ()=>{

    }
)

const nav = {
    ot:()=>{
        $("#mainArticle").html(pages.ot);
    },
    day01:()=>{
        $("#mainArticle").html(pages.day01);
    },
    chap19:()=>{
        $("#mainArticle").html(pages.chap19);
    },
    chap20:()=>{
        $("#mainArticle").html(pages.chap20);
    },
    chap21:()=>{
        $("#mainArticle").html(pages.chap21);
    },
    chap22:()=>{
        $("#mainArticle").html(pages.chap22);
    },
    chap23:()=>{
        $("#mainArticle").html(pages.chap23);
    },
    chap24:()=>{
        $("#mainArticle").html(pages.chap24);
    },
    chap25:()=>{
        $("#mainArticle").html(pages.chap25);
    }
};

const vocabs = {
    chap20:()=>{
        $("#mainArticle").html(vocab.chap20);
        funcs.practiceSentence();
    },
    chap21:()=>{
        $("#mainArticle").html(vocab.chap21);
        funcs.practiceSentence();
    },
    chap22:()=>{
        $("#mainArticle").html(vocab.chap22);
        funcs.practiceSentence();
    },
    chap23:()=>{
        $("#mainArticle").html(vocab.chap23);
        funcs.practiceSentence();
    },
    chap24:()=>{
        $("#mainArticle").html(vocab.chap24);
    },
    chap25:()=>{
        $("#mainArticle").html(vocab.chap25);
    }
}

const funcs = {
    imageWithSub:(id,position,src,width,height,text)=>{
        if (position === "center"){
            $("#"+id).html(
                '<div class="centerItem">\
                    <img\
                        src="'+src+'"\
                        style="\
                            width:'+width.toString()+'px;\
                            height:'+height.toString()+'px;\
                            border-radius:10px;\
                            "\
                    /><br><sub class="imgSub">'+
                        text
                    +'</sub>\
                </div>'
            );
        }else if (position === "left"){
            $("#"+id).html(
                '<div class="floatL">\
                    <img\
                        src="'+src+'"\
                        style="\
                            width:'+width.toString()+'px;\
                            height:'+height.toString()+'px;\
                            border-radius:10px;\
                            "\
                    /><br><sub class="imgSub">'+
                        text
                    +'</sub>\
                </div>'
            );
        }else{
            $("#"+id).html(
                '<div class="floatR">\
                    <img\
                        src="'+src+'"\
                        style="\
                            width:'+width.toString()+'px;\
                            height:'+height.toString()+'px;\
                            border-radius:10px;\
                            "\
                    /><br><sub class="imgSub">'+
                        text
                    +'</sub>\
                </div>'
            );
        }
    },
    photoAlbum:(id,albumID,position,src,buttonId1, buttonId2,width,height,text,size)=>{
        let index = 0;
        if (position === "center"){
            $("#"+id).html(
                '<div class="centerItem">\
                    <img\
                        id="'+albumID+'"\
                        src="'+src[index]+'"\
                        style="\
                            width:'+width.toString()+'px;\
                            height:'+height.toString()+'px;\
                            border-radius:10px;\
                            "\
                    /><br><sub class="imgSub">'+
                        text[index]
                    +'</sub><br>\
                    <div class="clearB"></div>\
                    <div class="floatL">\
                        <div id="'+buttonId1+'"></div>\
                    </div>\
                    <div class="floatL">\
                        <div id="'+buttonId2+'"></div>\
                    </div>\
                    <div class="clearB"></div>\
                </div>'
            );
        }else if (position === "left"){
            $("#"+id).html(
                '<div class="floatL">\
                    <img\
                        id="'+albumID+'"\
                        src="'+src[index]+'"\
                        style="\
                            width:'+width.toString()+'px;\
                            height:'+height.toString()+'px;\
                            border-radius:10px;\
                            "\
                    /><br><sub class="imgSub">'+
                        text[index]
                    +'</sub>\
                    <div class="clearB"></div>\
                    <div class="floatL">\
                        <div id="'+buttonId1+'"></div>\
                    </div>\
                    <div class="floatL">\
                        <div id="'+buttonId2+'"></div>\
                    </div>\
                    <div class="clearB"></div>\
                </div>'
            );
        }else{
            $("#"+id).html(
                '<div class="floatR">\
                    <img\
                        id="'+albumID+'"\
                        src="'+src[index]+'"\
                        style="\
                            width:'+width.toString()+'px;\
                            height:'+height.toString()+'px;\
                            border-radius:10px;\
                            "\
                    /><br><sub class="imgSub">'+
                        text[index]
                    +'</sub>\
                    <div class="clearB"></div>\
                    <div class="floatL">\
                    <div id="'+buttonId1+'"></div>\
                </div>\
                <div class="floatL">\
                    <div id="'+buttonId2+'"></div>\
                </div>\
                    <div class="clearB"></div>\
                </div>'
            );
        }
        funcs.button(
            buttonId1,
            buttonId1+"btn",
            "previous",
            ()=>{
                if (index > 0)
                    index--;
                $("#"+albumID).attr("src",src[index]);
                $("#"+albumID+" .imgSub").html(text[index]);
            }
        );
        funcs.button(
            buttonId2,
            buttonId2+"btn",
            "next",
            ()=>{
                if (index < size-1)
                    index++;
                $("#"+albumID).attr("src",src[index]);
                $("#"+albumID+" #imgSub").html(text[index]);
            }
        );
    },
    button:(id,buttonId,text,onClick)=>{
        $("#"+id).html(
            '<button\
                id="'+buttonId+'"\
            >'+
                text+
            '</button>'
        );
        $("#"+buttonId).click(onClick);
    },
    practiceSentence:()=>{
        $(".practiceSentence").html(
            'ex)<input type="text" style="width:250px;height:30px;">'
        )
    }
}