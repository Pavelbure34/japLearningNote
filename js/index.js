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
    },
    chap26:()=>{
        $("#mainArticle").html(pages.chap26);
    },
    chap27:()=>{
        $("#mainArticle").html(pages.chap27);
    },
    chap28:()=>{
        $("#mainArticle").html(pages.chap28);
    },
    chap29:()=>{
        $("#mainArticle").html(pages.chap29);
    },
    chap30:()=>{
        $("#mainArticle").html(pages.chap30);
    },
    chap31:()=>{
        $("#mainArticle").html(pages.chap31);
    },
    chap32:()=>{
        $("#mainArticle").html(pages.chap32);
    },
    chap33:()=>{
        $("#mainArticle").html(pages.chap33);
    },
    chap34:()=>{
        $("#mainArticle").html(pages.chap34);
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
        funcs.practiceSentence();
    },
    chap25:()=>{
        $("#mainArticle").html(vocab.chap25);
        funcs.practiceSentence();
    },
    chap26:()=>{
        $("#mainArticle").html(vocab.chap26);
        funcs.practiceSentence();
    },
    chap27:()=>{
        $("#mainArticle").html(vocab.chap27);
        funcs.practiceSentence();
    },
    chap28:()=>{
        $("#mainArticle").html(vocab.chap28);
        funcs.practiceSentence();
    },
    chap29:()=>{
        $("#mainArticle").html(vocab.chap29);
    },
    chap30:()=>{
        $("#mainArticle").html(vocab.chap30);
    },
    chap31:()=>{
        $("#mainArticle").html(vocab.chap31);
        funcs.renderVocabList(vocab_db[0].vocabs,"list1","list2");
    },
    chap32:()=>{
        $("#mainArticle").html(vocabs.chap32);
        $("#list1").append("<ul>");
        $("#list2").append("<ul>");
        let first,second,third = [];
        let size = vocab_db[1].length;
        let vocablist = vocab_db[1].vocabs;
        let key = vocab_db[1].key;
        for (let i = 0;i < size;i++){
            first = vocablist[i].first.split(".");
            second = vocablist[i].second.split(".");
            if (
                key === 1 || key === 4 ||
                key === 11 || key === 14 ||
                key === 15
            ){
                third = first[1].split("_"); 
            }
            if (i < size/2 && (
                i != 0 && i != 3
            )){
                $("#list1").append(
                    funcs.renderEachVocab(first,second)
                );
            }else if (i > size/2 && (
                i != 10 && i != 13 &&
                i != 14
            )){
                $("#list2").append(
                    funcs.renderEachVocab(first,second)
                );
            }else{
                switch (i){
                    case 0:
                        $("#list1").append(
                            '<li><emphR><fg t="'
                                + third[0]+'">具</fg>'+
                                '<fg t="'+ third[2]
                                +'">合</fg>:'+second[0]
                                +'<emphB>'+second[1]+
                            '</emphB></li>'
                        );
                    case 3:
                        $("#list1").append(
                            '<li><emphR><fg t="'
                                + third[0]+'">印</fg>'+
                                '<fg t="'+ third[2]
                                +'">しょう</fg>:'+second[0]
                                +'<emphB>'+second[1]+
                            '</emphB></li>'
                        );
                    case 10:
                        $("#list2").append(
                            '<li><emphR><fg t="'
                                + third[0]+'">丈</fg>'+
                                '<fg t="'+ third[2]
                                +'">夫だ</fg>:'+second[0]
                                +'<emphB>'+second[1]+
                            '</emphB></li>'
                        );
                    case 13:
                        $("#list2").append(
                            '<li><emphR><fg t="'
                                + third[0]+'">得</fg>'+
                                '<fg t="'+ third[2]
                                +'">意だ</fg>:'+second[0]
                                +'<emphB>'+second[1]+
                            '</emphB></li>'
                        );
                    case 14:
                        $("#list2").append(
                            '<li><emphR><fg t="'
                                + third[0]+'">口が</fg>'+
                                '<fg t="'+ third[2]
                                +'">固い</fg>:'+second[0]
                                +'<emphB>'+second[1]+
                            '</emphB></li>'
                        );
                }
            }
        }
        $("#list1").append("</ul>");
        $("#list2").append("</ul>");
    },
    chap33:()=>{
        $("#mainArticle").html(vocabs.chap33);
    },
    chap34:()=>{
        $("#mainArticle").html(vocabs.chap34);
    }
}

const diary ={
    _0616:()=>{
        $("#mainArticle").html(diaries._0616);
    },
    _0617:()=>{
        $("#mainArticle").html(diaries._0617);
    },
    _0618:()=>{
        $("#mainArticle").html(diaries._0618);
    },
    _0619:()=>{
        $("#mainArticle").html(diaries._0619);
    },
    _0620:()=>{
        $("#mainArticle").html(diaries._0620);
    }
}