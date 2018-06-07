function​​ ​​send​(x,y,z)​ ​{ ​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​$​.ajax({
url:​"https://docs.google.com/forms/d/e/1FAIpQLSfPHCjxispEtR8mYfYyXdlRIvVVdHuFW3 YroJZ1zaz4-eRnPw/formResponse"​,data:{​"entry_1474370059"​:x,​ ​​"entry_468591152"​:y, "entry_2120015015"​:z​ ​},type:​"POST"​​ ​,datatype:​"xml"
​ ​​ ​});
}
function​​ ​​get​()​ ​{
​ ​​ ​​ ​​ ​​var​​ ​tot​ ​​=​​ ​[];
​ ​​ ​​ ​​ ​​for​​ ​(​var​​ ​i​ ​​=​​ ​​0​;​ ​i​<=​180​;​ ​i​+=​5​)​ ​{
​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​var​​ ​fin​ ​​= [​10​*​Math​.​sin​(((​2​*​Math​.​PI​)/​50​)​*​(i)),i,​10​*​Math​.​cos​(((​2​*​Math​.​PI​)/​50​)​*​(i))]; ​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​tot.​push​(fin)
​ ​​ ​​ ​​ ​}
​ ​​ ​​ ​​ ​​return​​ ​tot;
}
//yiggity​ ​yark​ ​with​ ​a​ ​side​ ​of​ ​stewed​ ​shark​ ​served​ ​cold​ ​with​ ​a​ ​lark​ ​with​ ​a​ ​beak and​ ​a​ ​bark
function​​ ​​yark​()​ ​{
​ ​​ ​​ ​​ ​​for​​ ​(​var​​ ​i​ ​​=​​ ​​0​;​ ​i​<=​36​;​ ​i​++​)​ ​{
​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​send​(get()[i][​0​],get()[i][​1​],get()[i][​2​]); ​ ​​ ​​ ​​ ​}
}
function​​ ​​send2​(x,y,z)​ ​{
​ ​​ ​​ ​​ ​​for​​ ​(​var​​ ​i​ ​​=​​ ​​0​;​ ​i​ ​​<​​ ​ciroq(x,y,z).​length​;​ ​i​++​)​ ​{ ​ ​​ ​​ ​​ ​​$​.ajax({
url:​"https://docs.google.com/forms/d/e/1FAIpQLSfPHCjxispEtR8mYfYyXdlRIvVVdHuFW3 YroJZ1zaz4-eRnPw/formResponse"​,data:{​"entry_1474370059"​:ciroq(x,y,z)[i][​0​], "entry_468591152"​:ciroq(x,y,z)[i][​1​],​ ​​"entry_2120015015"​:ciroq(x,y,z)[i][​2​] },type:​"POST"​​ ​,datatype:​"xml"
    
 ​ ​​ ​​var​}); ​ ​​ ​​ ​​ ​}
}
 function​​ ​​ciroq​(x,y,z)​ ​{
​ ​​ ​​var​​ ​tot​ ​​=​​ ​[];
​ ​​ ​​for​​ ​(i​ ​​=​​ ​​0​;​ ​i​ ​​<​​ ​​5​;​ ​i​++​)​ ​{
​ ​​ ​​ ​​ ​​if​​ ​(y​ ​​<​​ ​​100​)​ ​{
​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​var​​ ​fin​ ​​=​​ ​[(​1​/​10​)​*​y​*​Math​.​cos​(((​2​*​Math​.​PI​)/​5​)​*​i)​+​x,​ ​y, (​1​/​10​)​*​y​*​Math​.​sin​(((​2​*​Math​.​PI​)/​5​)​*​i)​+​z];
​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​tot.​push​(fin);
​ ​​ ​​ ​​ ​}
​ ​​ ​​ ​​ ​​if​​ ​(y​ ​​>=​​ ​​100​)​ ​{
​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​var​​ ​fin​ ​​=​​ ​[​10​*​Math​.​cos​(((​2​*​Math​.​PI​)/​5​)​*​i)​+​x,​ ​y, 10​*​Math​.​sin​(((​2​*​Math​.​PI​)/​5​)​*​i)​+​z];
​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​tot.​push​(fin);
​ ​​ ​​ ​​ ​}
​ ​​ ​}
​ ​​ ​​return​​ ​tot;
}
 function​​ ​​ultiboi​()​ ​{ (​function​​ ​​theLoop​​ ​(o)​ ​{
​ ​ ​ ​ ​ ​
​​ ​​setTimeout​(​function​​ ​()​ ​{
​​ ​​ ​​ ​send2(get()[o​-​1​][​0​],get()[o​-​1​][​1​],get()[o​-​1​][​2​]); ​​ ​​ ​​ ​​if​​ ​(​--​o)​ ​{
​​ ​​ ​​ ​​ ​​ ​theLoop(o);
​​ ​​ ​​ ​}
​​ ​},​ ​​1000​);
})(get().​length​); }
 
