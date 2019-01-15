let _data = [
    {
        id:"1",
        name:"Lenovo Legion Y520",
        descript: "15.6 Essential Gaming Laptop.",
        prize: "$788",
        img: "image/Latop-lenovo.png",
        type: ["laptop"],
        brand: ["Lenovo"],
        desimg01:"image/spec02.png",
        desimg02:"image/spec01.jpg",
        des: "With the latest high-performance hardware from Intel® and NVIDIA® housed in a thin and light,\
         all-aluminum chassis, the 15.6-inch Lenovo Legion Y520 laptop is a gaming masterpiece.\
          Featuring best-in-class system lighting from Corsair® iCUE and immersive visuals and moving audio from Dolby®,\
           the Legion Y520 was engineered to deliver near-perfect gaming immersion.",
    },
    {
        id:"2",
        name:"Lenovo Legion Y740",
        descript: "15.6 Essential Gaming Laptop.",
        prize: "$889",
        img: "image/Latop-lenovo.png",
        type: ["laptop"],
        brand: ["Lenovo"],
        desimg01:"image/spec02.png",
        desimg02:"image/spec01.jpg",
        des: "With the latest high-performance hardware from Intel® and NVIDIA® housed in a thin and light,\
         all-aluminum chassis, the 15.6-inch Lenovo Legion Y740 laptop is a gaming masterpiece.\
          Featuring best-in-class system lighting from Corsair® iCUE and immersive visuals and moving audio from Dolby®,\
           the Legion Y740 was engineered to deliver near-perfect gaming immersion.",
    },
    {
        id:"3",
        name:"Logitech Z313",
        descript: " SPEAKER SYSTEM WITH SUBWOOFER.",
        prize: "$49.99",
        img: "image/tainguyen/logitech/loa-logi.png",
        type: ["speaker"],
        brand: ["Logitech"],
        des: "Total Watt (RMS): 25W\
        Subwoofer: 15W\
        Satellites: 2 x 5W\
        3.5mm input: 1\
        Headphone jack: 1\
        Controls: Power and volume controls on wired control pod",
    },
    {
        id:"4",
        name:"Logitech Z313",
        descript: " SPEAKER SYSTEM WITH SUBWOOFER.",
        prize: "$99.99",
        img: "image/tainguyen/logitech/loa-logi.png",
        type: ["speaker"],
        brand: ["Logitech"],
        des: "Total Watt (RMS): 25W\
        Subwoofer: 15W\
        Satellites: 2 x 5W\
        3.5mm input: 1\
        Headphone jack: 1\
        Controls: Power and volume controls on wired control pod",
    },
    {
        id:"5",
        name:"Sabre RGB Gaming Mouse",
        descript: "GAMING MOUSE .",
        prize: "$99.99",
        img: "image/tainguyen/corsair/chuot-corsair.png",
        type: ["mouse"],
        brand: ["Corsair"],
        desimg01:"image/corsair-03.jpg",
        desimg02:"image/corsair-04.jpg",
        des: "The CORSAIR Gaming Sabre RGB gaming mouse offers a unique combination of light weight,\
         highly accurate tracking, and four-zone backlighting for fast competitive gameplay with a personalized look that matches your style. ."
    },
    {
        id:"6",
        name:"GLAIVE RGB Gaming Mouse",
        descript: "GAMING MOUSE",
        prize: "$99.99",
        img: "image/tainguyen/corsair/chuot-corsair01.png",
        type: ["mouse"],
        brand: ["Corsair"],
        desimg01:"image/corsair-01.png",
        desimg02:"image/corsair-02.jpg",
        des:"CORSAIR GLAIVE RGB is the ultimate gaming mouse in performance and comfort.\
         The contoured shape is designed for extended play. A custom high-accuracy 16000 DPI optical gaming sensor ensures maximum performance. .",
    },
    {
        id:"7",
        name:"VOID PRO RGB Wireless",
        descript: "Wireless Premium Gaming Headset with Dolby® Headphone 7.1 — Carbon (AP)",
        prize: "$99.99",
        img: "image/tainguyen/corsair/tainghe-corsair.png",
        type: ["new","headphone"],
        brand: ["Corsair"],
        desimg01:"image/corsair-tech01.jpg",
        desimg02:"image/corsair-tech02.jpg",
        des:"The VOID PRO RGB Wireless headset provides exceptional comfort,\
         epic audio performance and legendary CORSAIR durability to deliver the ultimate gaming experience.",
    },
    {
        id:"8",
        name:"ROG STRIX 7.1",
        descript: "True 7.1 gaming headset with 10 discrete neodymium-magnet drivers and a plug-and-play USB audio station",
        prize: "$99.99",
        img: "image/tainguyen/asus/tainghe-asus.png",
        type: ["headphone"],
        brand: ["Asus"],
        desimg01: "image/asus-tech01.png",
        desimg02: "image/asus-tech02.png",
        des: "Strix 7.1 is a superior true 7.1 surround gaming headset engineered \
        with 10 powerful discrete neodymium-magnet drivers, full-size hexagonal ear cushions \
        (130mm across at the widest point) and stylish static and breathing lighting effects. It is \
        accompanied by a driver-free USB audio station that features loads of audio controls and sound effects.\
         Strix 7.1 provides an unrivaled audio experience with punchy and immersive sound. \
         Every gunshot and footstep is reproduced with accurate positioning and stunning clarity, bringing the battlefield to life.",
    },
];
module.exports = {
    
    getProducList: (type) => {
        if(!type) {
            return _data;
        }

        let result = [];
        for(let i in _data) {

            if(_data[i].type && _data[i].type.indexOf(type) != -1) {
                result.push(_data[i]);
            }

        }
 
        return result;
    },
    getProducListByBrand: (type, brand) => {
        if(!type) {
            return _data;
        }
        let result = [];
        for(let i in _data) {

            if(_data[i].brand.indexOf(brand) != -1 && _data[i].type && _data[i].type.indexOf(type) != -1) {
                result.push(_data[i]);
            }

        }
        console.log(result)
        return result;
    },
    getProductById(id){
        return _data.find(item=> item.id === id);
    }

}
