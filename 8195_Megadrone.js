//Code​ ​for​ ​Cylinder​ ​of​ ​3d​ ​Drone:
function​​ ​​get​(n)​ ​{
​ ​​ ​​var​​ ​tot​ ​​=​​ ​[];
​ ​​ ​​for​​ ​(​var​​ ​i​=​0​;​ ​i​ ​​<​​ ​​36​;​ ​i​++​)​ ​{
​ ​​ ​​ ​​ ​​var​​ ​fin​ ​​=​​ ​[​30​*​Math​.​cos​(((​2​*​Math​.​PI​)/​36​)​*​i),
 
 30​*​Math​.​sin​(((​2​*​Math​.​PI​)/​36​)​*​i),​ ​n]; ​ ​​ ​​ ​​ ​tot.​push​(fin);
​ ​​ ​}
​ ​​ ​​return​​ ​tot;
}
function​​ ​​send​(x,y,z)​ ​{
​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​$​.ajax({
url:​"https://docs.google.com/forms/d/e/1FAIpQLSfulBL_OaCMmUTSiN28tYOitGAYvR1Zsg zl9iyf1SR-hjJwQQ/formResponse"​,data:{​"entry_1666987067"​:x, "entry_1998937306"​:y,​ ​​"entry_1024803570"​:z},type:​"POST"​​ ​,datatype:​"xml"
​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​});
}
function​​ ​​esketit​()​ ​{
for​​ ​(​var​​ ​o​ ​​=​​ ​​0​;​ ​o​ ​​<​​ ​​3​;​ ​o​++​)​ ​{
​ ​​ ​​ ​​ ​​for​​ ​(​var​​ ​p​ ​​=​​ ​​0​;​ ​p​ ​​<​​ ​​36​;​ ​p​++​)​ ​{
​ ​​ ​​ ​​ ​​ ​​ ​​send​(get(o​*​5.625​)[p][​0​],get(o​*​5.625​)[p][​1​],get(o​*​5.625​)[p][​2​]); ​ ​​ ​​ ​​ ​}
​ ​​ ​}
}
//Code​ ​For​ ​Propellor​ ​Rims​ ​of​ ​3d​ ​Drone: 
function​​ ​​get​(x,y)​ ​{
​ ​​ ​​var​​ ​tot​ ​​=​​ ​[];
​ ​​ ​​for​​ ​(​var​​ ​i​=​0​;​ ​i​ ​​<​​ ​​36​;​ ​i​++​)​ ​{
​ ​​ ​​ ​​ ​​var​​ ​fin​ ​​=​​ ​[x​+​30​*​Math​.​cos​(((​2​*​Math​.​PI​)/​36​)​*​i), y​+​30​*​Math​.​sin​(((​2​*​Math​.​PI​)/​36​)​*​i),​ ​​5.625​];
​ ​​ ​​ ​​ ​tot.​push​(fin);
​ ​​ ​}
​ ​​ ​​return​​ ​tot; }
function​​ ​​send​(x,y,z)​ ​{ ​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​$​.ajax({
     
 url:​"https://docs.google.com/forms/d/e/1FAIpQLSfulBL_OaCMmUTSiN28tYOitGAYvR1Zsg zl9iyf1SR-hjJwQQ/formResponse"​,data:{​"entry_1666987067"​:x, "entry_1998937306"​:y,​ ​​"entry_1024803570"​:z},type:​"POST"​​ ​,datatype:​"xml"
​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​​ ​});
}
function​​ ​​esketit​()​ ​{
​ ​​ ​​ ​​ ​​for​​ ​(​var​​ ​p​ ​​=​​ ​​0​;​ ​p​ ​​<​​ ​​36​;​ ​p​++​)​ ​{ ​​​​​​​​​​​​​send​(get(​120​,​0​)[p][​0​],get(​120​,​0​)[p][​1​],get(​120​,​0​)[p][​2​]); ​​​​​​​​​​​​​send​(get(​-​120​,​0​)[p][​0​],get(​-​120​,​0​)[p][​1​],get(​-​120​,​0​)[p][​2​]); ​ ​​ ​​ ​​ ​​ ​​ ​​send​(get(​0​,​120​)[p][​0​],get(​0​,​120​)[p][​1​],get(​0​,​120​)[p][​2​]);
​ ​​ ​​ ​​ ​​ ​​ ​​send​(get(​0​,​-​120​)[p][​0​],get(​0​,​-​120​)[p][​1​],get(​0​,​-​120​)[p][​2​]); ​ ​​ ​​ ​​ ​}
}
  
