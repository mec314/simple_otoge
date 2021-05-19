var Global = require("./global");

function notes1(){
    let ue = Global.ue;
    let naka = Global.naka;
    let shita = Global.shita;
    let type1 = Global.type1;
    let type2 = Global.type2;
    let hit = Global.hit_sound;

    let notes = [
        {timing:3.69, type:type2, params:{angle:270, y:naka, sound:hit}},
        {timing:4.54, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:5.39, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:6.466, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:6.677, type:type2, params:{angle:0, y:naka, sound:hit}},
        //
        //
        {timing:7.112, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:7.535, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:7.972, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:8.394, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:8.60, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:8.82, type:type2, params:{angle:0, y:ue+100, sound:hit}},
        {timing:9.03, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:9.25, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:9.45, type:type2, params:{angle:0, y:shita+100, sound:hit}},
        {timing:9.67, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:9.99, type:type2, params:{angle:0, y:shita, sound:hit}},
        //
        {timing:10.530, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:10.968, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:11.390, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:11.821, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:12.030, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:12.253, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:12.475, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:12.666, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:12.891, type:type2, params:{angle:0, y:naka, sound:hit}},
        //
        {timing:7.112+6.85, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:7.535+6.85, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:7.972+6.85, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:8.394+6.85, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:8.60+6.85, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:8.82+6.85, type:type2, params:{angle:0, y:ue+100, sound:hit}},
        {timing:9.03+6.85, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:9.25+6.85, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:9.45+6.85, type:type2, params:{angle:0, y:shita+100, sound:hit}},
        {timing:9.67+6.85, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:9.99+6.85, type:type2, params:{angle:0, y:shita, sound:hit}},
        //
        {timing:17.396, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:17.824, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:18.263, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:18.681, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:18.900, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:19.112, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:19.348, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:19.534, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:19.761, type:type2, params:{angle:0, y:naka, sound:hit}},
        //
        //
        {timing:20.827, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:21.140, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:21.458, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:21.677, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:21.997, type:type2, params:{angle:0, y:ue, sound:hit}},
        //
        {timing:20.827+1.703, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:21.140+1.703, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:21.458+1.703, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:21.677+1.703, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:21.997+1.703, type:type2, params:{angle:0, y:naka, sound:hit}},
        //
        {timing:20.827+3.406, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:21.140+3.406, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:21.458+3.406, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:21.677+3.406, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:21.997+3.406, type:type2, params:{angle:0, y:ue, sound:hit}},
        //
        {timing:20.827+1.703*3, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:21.140+1.703*3, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:21.458+1.703*3, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:21.677+1.703*3, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:21.997+1.703*3, type:type2, params:{angle:0, y:naka, sound:hit}},
        //
        //
        {timing:27.669, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:28.545, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:28.852, type:type2, params:{angle:0, y:shita, sound:hit}},
    
        {timing:27.669+1.48, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:30.251, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:30.568, type:type2, params:{angle:0, y:naka, sound:hit}},
    
        {timing:31.126, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:31.966, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:32.281, type:type2, params:{angle:0, y:ue, sound:hit}},
    
        {timing:32.844, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:33.034, type:type2, params:{angle:0, y:naka-80, sound:hit}},
        {timing:33.257, type:type2, params:{angle:0, y:naka+80, sound:hit}},
        {timing:33.469, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:33.678, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:33.996, type:type2, params:{angle:0, y:shita, sound:hit}},
        //
        {timing:27.669+6.87, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:28.545+6.87, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:28.852+6.87, type:type2, params:{angle:0, y:shita, sound:hit}},
    
        {timing:27.669+1.48+6.87, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:30.251+6.87, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:30.568+6.87, type:type2, params:{angle:0, y:naka, sound:hit}},
    
        {timing:31.126+6.87, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:31.966+6.87, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:32.281+6.87, type:type2, params:{angle:0, y:ue, sound:hit}},
    
        {timing:32.844+6.87, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:33.034+6.87, type:type2, params:{angle:0, y:naka-80, sound:hit}},
        {timing:33.257+6.87, type:type2, params:{angle:0, y:naka+80, sound:hit}},
        {timing:33.469+6.87, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:33.678+6.87, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:33.996+6.87, type:type2, params:{angle:0, y:shita, sound:hit}},
        //
        //
        {timing:41.398, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:41.602, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:41.827, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:42.034, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:42.254, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:42.569, type:type2, params:{angle:0, y:ue, sound:hit}},
    
        {timing:42.893, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:42.998, type:type2, params:{angle:0, y:naka, sound:hit}},
    
        {timing:41.398+1.724, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:41.602+1.724, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:41.827+1.724, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:42.034+1.724, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:42.254+1.724, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:42.569+1.724, type:type2, params:{angle:0, y:shita, sound:hit}},
    
        //
        {timing:47.824-0.107125*28, type:type1, params:{angle:270, y:ue, sound:hit}},           
        {timing:47.824-0.107125*24, type:type1, params:{angle:90, y:shita, sound:hit}},
        {timing:47.824-0.107125*20, type:type1, params:{angle:270, y:ue, sound:hit}},
        {timing:47.824-0.107125*16, type:type1, params:{angle:90, y:shita, sound:hit}},
        {timing:47.824-0.107125*12, type:type1, params:{angle:270, y:ue, sound:hit}},           
        {timing:47.824-0.107125*8,  type:type1, params:{angle:90, y:shita, sound:hit}},
        {timing:47.824-0.107125*4,  type:type1, params:{angle:270, y:ue, sound:hit}},
        {timing:47.824           ,  type:type1, params:{angle:90, y:shita, sound:hit}},
    
        {timing:47.824+0.107125*4,  type:type1, params:{angle:0, y:ue, sound:hit}},
        {timing:47.824+0.107125*12, type:type1, params:{angle:180, y:shita, sound:hit}},
        
        {timing:47.824+0.107125*20, type:type1, params:{angle:180, y:ue, sound:hit}},
        {timing:47.824+0.107125*28, type:type1, params:{angle:0, y:shita, sound:hit}},
        
        {timing:47.824+0.107125*36, type:type1, params:{angle:90, y:shita, sound:hit}},
        {timing:47.824+0.107125*40, type:type1, params:{angle:270, y:ue, sound:hit}},
        {timing:47.824+0.107125*44, type:type1, params:{angle:90, y:shita, sound:hit}},
        {timing:47.824+0.107125*48, type:type1, params:{angle:180, y:naka, sound:hit}},
        {timing:47.824+0.107125*52, type:type1, params:{angle:0, y:naka, sound:hit}},
        //
        //
        {timing:55.963-0.4282*2, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:55.963, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:55.963+0.4282, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:55.963+0.4282*2, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:55.963+0.4282*3, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:55.963+0.4282*4, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:55.963+0.4282*5, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:55.963+0.4282*6, type:type2, params:{angle:0, y:naka-100, sound:hit}},
        {timing:55.963+0.4282*7, type:type2, params:{angle:0, y:naka+100, sound:hit}},
        {timing:55.963+0.4282*8, type:type2, params:{angle:0, y:naka+100, sound:hit}},
        {timing:55.963+0.4282*9, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:55.963+0.4282*10, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:55.963+0.4282*11, type:type2, params:{angle:0, y:naka-100, sound:hit}},
        {timing:55.963+0.4282*12, type:type2, params:{angle:0, y:naka+100, sound:hit}},
        {timing:55.963+0.4282*13, type:type2, params:{angle:0, y:shita, sound:hit}},            
        //
        {timing:61.971, type:type2, params:{angle:0, y:ue, sound:hit}},    
        {timing:61.971+0.107125, type:type2, params:{angle:0, y:naka, sound:hit}}, 
        {timing:61.971+0.107125*2, type:type2, params:{angle:0, y:shita, sound:hit}}, 
        {timing:61.971+0.107125*3, type:type2, params:{angle:0, y:naka, sound:hit}}, 
    
        {timing:61.971+0.107125*4, type:type2, params:{angle:0, y:ue, sound:hit}}, 
        {timing:61.971+0.107125*5, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:61.971+0.107125*6, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:61.971+0.107125*7, type:type2, params:{angle:0, y:naka, sound:hit}},
    
        {timing:61.971+0.107125*8, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:61.971+0.107125*9, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:61.971+0.107125*10, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:61.971+0.107125*11, type:type2, params:{angle:0, y:naka, sound:hit}},
    
        {timing:61.971+0.107125*12, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:61.971+0.107125*13, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:61.971+0.107125*14, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:61.971+0.107125*15, type:type2, params:{angle:0, y:naka, sound:hit}},            
    
        {timing:61.971+0.107125*16, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:61.971+0.107125*17, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:61.971+0.107125*18, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:61.971+0.107125*19, type:type2, params:{angle:0, y:naka, sound:hit}},     
    
        {timing:61.971+0.107125*20, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:61.971+0.107125*21, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:61.971+0.107125*22, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:61.971+0.107125*23, type:type2, params:{angle:0, y:naka, sound:hit}},   
    
        {timing:61.971+0.107125*24, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:61.971+0.107125*25, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:61.971+0.107125*26, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:61.971+0.107125*27, type:type2, params:{angle:0, y:naka, sound:hit}},   
    
        {timing:61.971+0.107125*28, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:61.971+0.107125*29, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:61.971+0.107125*30, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:61.971+0.107125*31, type:type2, params:{angle:0, y:naka, sound:hit}},   
    
        {timing:65.419, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:66.247, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:66.684, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:67.084, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:67.551, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:68.000, type:type2, params:{angle:0, y:shita, sound:hit}},
        {timing:68.400, type:type2, params:{angle:0, y:naka, sound:hit}},
        {timing:68.852, type:type2, params:{angle:0, y:ue, sound:hit}},
        {timing:70.543, type:type2, params:{angle:0, y:ue+100, sound:hit}},
        ];

    return notes;
};

module.exports = notes1;