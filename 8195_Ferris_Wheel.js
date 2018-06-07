function​​ ​​get​(pct)​ ​{
​ ​​ ​​var​​ ​tot​ ​​=​​ ​[];
​ ​​ ​​for​​ ​(​var​​ ​i​=​0​;​ ​i​ ​​<=​​ ​​20​;​ ​i​++​)​ ​{
​ ​​ ​​ ​​ ​​var​​ ​fin​ ​​= [(​-​100​+​10​*​i)​*​Math​.​cos​(​2​*​Math​.​PI​*​pct),(​-​100​+​10​*​i)​*​Math​.​sin​(​2​*​Math​.​PI​*​pct)]; ​ ​​ ​​ ​​ ​tot.​push​(fin);
​ ​​ ​}
​ ​​ ​​return​​ ​tot;
}
function​​ ​​circ​(rad)​ ​{
​ ​​ ​​var​​ ​tot​ ​​=​​ ​[];
​ ​​ ​​for​​ ​(​var​​ ​i​=​0​;​ ​i​ ​​<​​ ​​36​;​ ​i​++​)​ ​{
​ ​​ ​​ ​​ ​​var​​ ​fin​ ​​= [rad​*​Math​.​cos​(((​2​*​Math​.​PI​)/​36​)​*​i),rad​*​Math​.​sin​(((​2​*​Math​.​PI​)/​36​)​*​i)]; ​ ​​ ​​ ​​ ​tot.​push​(fin);
​ ​​ ​}
​ ​​ ​​return​​ ​tot;
}
function​​ ​​circ2​(rad)​ ​{ ​ ​​ ​​var​​ ​tot​ ​​=​​ ​[];
            
 ​ ​​ ​​for​​ ​(​var​​ ​i​=​0​;​ ​i​ ​​<​​ ​​24​;​ ​i​++​)​ ​{
​ ​​ ​​ ​​ ​​var​​ ​fin​ ​​= [rad​*​Math​.​cos​(((​2​*​Math​.​PI​)/​24​)​*​i),rad​*​Math​.​sin​(((​2​*​Math​.​PI​)/​24​)​*​i)]; ​ ​​ ​​ ​​ ​tot.​push​(fin);
​ ​​ ​}
​ ​​ ​​return​​ ​tot;
}
 function​​ ​​send​(x,y)​ ​{ ​​​​​​​​​​​​​​​​​​​ ​​​​ ​​$​.ajax({
url:​"https://docs.google.com/forms/u/1/d/e/1FAIpQLSf1cEA_8wFpf7HRgbOwqj141CvuH9 0q7Zz0YBZ0lrib2xFbBA/formResponse"​,data:{​"entry_1906842643"​:x, "entry_635635927"​:y},type:​"POST"​​ ​,datatype:​"xml"
​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​});
 }
function​​ ​​esketit​()​ ​{
​ ​ ​ ​ ​ ​ ​ ​ ​
​​ ​(​function​​ ​​theLoop​​ ​(o)​ ​{
​​ ​​setTimeout​(​function​​ ​()​ ​{
​​ ​​ ​​ ​​for​​ ​(​var​​ ​p​ ​​=​​ ​​0​;​ ​p​ ​​<=​​ ​​20​;​ ​p​++​)​ ​{
​​ ​​ ​​ ​​ ​​ ​​send​(get(o/​12​)[p][​0​],get(o/​12​)[p][​1​]); ​​ ​​ ​​ ​}
​​ ​​ ​​ ​​if​​ ​(​--​o)​ ​{
​​ ​​ ​​ ​​ ​​ ​theLoop(o);
​​ ​​ ​​ ​}
​​ ​},​ ​​1000​);
})(​6​);
}
function​​ ​​esketit2​()​ ​{
​ ​​ ​​ ​​ ​​for​​ ​(​var​​ ​p​ ​​=​​ ​​0​;​ ​p​ ​​<​​ ​​36​;​ ​p​++​)​ ​{
​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​send​(circ(​100​)[p][​0​],​ ​circ(​100​)[p][​1​]); ​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​}
​​​​​​​​​for​​​(​var​​​m​​​=​​​​0​;​​m​​​<​​​​24​;​​m​++​)​​{ ​​​​​​​​​​​​​​​​​​​​​​​​​send​(circ2(​60​)[m][​0​],​​circ2(​60​)[m][​1​]); ​ ​​ ​​ ​​ ​}
​ ​​ ​​ ​​ ​}
