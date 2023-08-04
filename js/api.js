//데이터 API URL 생성
let url =
  "http://apis.data.go.kr/6260000/BusanTblRdemrfStusService/getTblRdemrfStusInfo";
const authKey =
  "e81NBOj0iuvIAQazeEbvL6EfwDzRA2XK%2BZxtDFtTD8U4LRiKzZRxMdniDwIxt4EfhACShvsIXLTVkRGvMGwZew%3D%3D";
let queryParams = "?" + encodeURIComponent("serviceKey") + "=" + authKey;
queryParams +=
  "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1");
queryParams +=
  "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("549");
queryParams +=
  "&" + encodeURIComponent("resultType") + "=" + encodeURIComponent("json");

//데이터 요청 함수
function getData(url, queryParams) {
  return fetch(url + queryParams)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res.getTblRdemrfStusInfo.body.items.item;
    })
    .catch((error) => console.log("error:", error));
}

//지역별 폴리곤 범위
const areas = [
  {
    name: "남구",
    path: [
      new kakao.maps.LatLng(35.103047248784286, 129.11295961141522),
      new kakao.maps.LatLng(35.094410482601404, 129.10228761447203),
      new kakao.maps.LatLng(35.095370509128884, 129.0988913289004),
      new kakao.maps.LatLng(35.09152718536468, 129.09914365472463),
      new kakao.maps.LatLng(35.093884910247475, 129.09516922085058),
      new kakao.maps.LatLng(35.10922496825909, 129.0929519207625),
      new kakao.maps.LatLng(35.10867398213381, 129.09041556742673),
      new kakao.maps.LatLng(35.103610164457805, 129.09037394693087),
      new kakao.maps.LatLng(35.10360422032376, 129.07498893071923),
      new kakao.maps.LatLng(35.10941460314568, 129.06509094751644),
      new kakao.maps.LatLng(35.12207909539642, 129.07282517014042),
      new kakao.maps.LatLng(35.12310066664928, 129.06999929435338),
      new kakao.maps.LatLng(35.12175320913892, 129.06869288466757),
      new kakao.maps.LatLng(35.12291840033185, 129.065366050622),
      new kakao.maps.LatLng(35.1329607872727, 129.06622304935118),
      new kakao.maps.LatLng(35.13571582072816, 129.06584291107848),
      new kakao.maps.LatLng(35.13853114784206, 129.06641870204234),
      new kakao.maps.LatLng(35.143518993348565, 129.06351679317666),
      new kakao.maps.LatLng(35.14846047429876, 129.06333437175263),
      new kakao.maps.LatLng(35.1493424388952, 129.0655181038153),
      new kakao.maps.LatLng(35.14865095, 129.06643322479647),
      new kakao.maps.LatLng(35.14968843, 129.06847829644616),
      new kakao.maps.LatLng(35.150453587474146, 129.07248050848332),
      new kakao.maps.LatLng(35.15210083522262, 129.07522146246527),
      new kakao.maps.LatLng(35.15439251429646, 129.07611359012753),
      new kakao.maps.LatLng(35.15535772566239, 129.0786837772829),
      new kakao.maps.LatLng(35.156905400256555, 129.08091773409822),
      new kakao.maps.LatLng(35.157501141073354, 129.0840053322874),
      new kakao.maps.LatLng(35.159137902375626, 129.0873390380752),
      new kakao.maps.LatLng(35.15822050251188, 129.08828121836783),
      new kakao.maps.LatLng(35.15793044367123, 129.0904683970825),
      new kakao.maps.LatLng(35.15937965378551, 129.0921295175128),
      new kakao.maps.LatLng(35.15411468273779, 129.0922580086528),
      new kakao.maps.LatLng(35.15323479283827, 129.09519800278898),
      new kakao.maps.LatLng(35.14840704226267, 129.1023374444953),
      new kakao.maps.LatLng(35.1467393938237, 129.10703419598582),
      new kakao.maps.LatLng(35.140850772066486, 129.10675072579133),
      new kakao.maps.LatLng(35.139532913819004, 129.10583911972253),
      new kakao.maps.LatLng(35.13776227176005, 129.10816306934566),
      new kakao.maps.LatLng(35.13616715289801, 129.11075473059816),
      new kakao.maps.LatLng(35.13397636900901, 129.1144278614321),
      new kakao.maps.LatLng(35.13189126888183, 129.11823516610292),
      new kakao.maps.LatLng(35.134935339546224, 129.12142946659566),
      new kakao.maps.LatLng(35.13143123561682, 129.12186506731297),
      new kakao.maps.LatLng(35.1305795777923, 129.12109705775887),
      new kakao.maps.LatLng(35.1282053786389, 129.122878243184),
      new kakao.maps.LatLng(35.12658788143197, 129.12261687732027),
      new kakao.maps.LatLng(35.12479782804382, 129.12397437416755),
      new kakao.maps.LatLng(35.12342562208506, 129.1241142279131),
      new kakao.maps.LatLng(35.122516420099195, 129.12457321162935),
      new kakao.maps.LatLng(35.12227870358076, 129.12579546310195),
      new kakao.maps.LatLng(35.12145540539912, 129.12546696059246),
      new kakao.maps.LatLng(35.118480030426525, 129.12863604790942),
      new kakao.maps.LatLng(35.115866036417856, 129.1276467802842),
      new kakao.maps.LatLng(35.114911550452085, 129.12863092905974),
      new kakao.maps.LatLng(35.11327805492305, 129.1272285342772),
      new kakao.maps.LatLng(35.11052208634734, 129.12816579998804),
      new kakao.maps.LatLng(35.10794872881128, 129.1269145255018),
      new kakao.maps.LatLng(35.104596538545685, 129.12485357253234),
      new kakao.maps.LatLng(35.10318829920432, 129.12499245930405),
      new kakao.maps.LatLng(35.10191120634599, 129.12381890408008),
      new kakao.maps.LatLng(35.100778141758894, 129.1247105814997),
      new kakao.maps.LatLng(35.09749096711643, 129.12510770909722),
      new kakao.maps.LatLng(35.09682330676677, 129.12412548507743),
      new kakao.maps.LatLng(35.097704156, 129.1232272979153),
      new kakao.maps.LatLng(35.099369981501916, 129.12278804522276),
      new kakao.maps.LatLng(35.099284154492125, 129.12151387749415),
      new kakao.maps.LatLng(35.09929299333912, 129.1189482912773),
      new kakao.maps.LatLng(35.100353561843754, 129.11704587624868),
      new kakao.maps.LatLng(35.10020058931748, 129.11548486790468),
      new kakao.maps.LatLng(35.10134506344905, 129.11393544268572),
    ],
  },
];

// 폴리곤 생성
function displayArea(area, list) {
  var polygon = new kakao.maps.Polygon({
    map: map, // 폴리곤을 표시할 지도 객체
    path: area.path,
    strokeWeight: 2,
    strokeColor: "#004c80",
    strokeOpacity: 0.8,
    fillColor: "#fff",
    fillOpacity: 0.7,
    markerToggle: false,
  });

  //폴리곤에 mouseover 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 변경
  kakao.maps.event.addListener(polygon, "mouseover", function (mouseEvent) {
    polygon.setOptions({ fillColor: "#09f" });
  });

  //폴리곤에 mousemove 이벤트를 등록
  kakao.maps.event.addListener(polygon, "mousemove", function (mouseEvent) {});

  //폴리곤에 mouseout 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 원래색으로 변경
  kakao.maps.event.addListener(polygon, "mouseout", function () {
    polygon.setOptions({ fillColor: "#fff" });
  });

  //폴리곤에 click 이벤트를 등록
  kakao.maps.event.addListener(polygon, "click", function (mouseEvent) {
    if (polygon.markerToggle) {
      createMarker(list, area.name);
    } else {
      removeMarker();
    }
    polygon.markerToggle = !polygon.markerToggle;
  });
}

//마커 배열
const markers = [];

//마커 생성
function createMarker(list, areaName) {
  const filteredData = list.filter((item) => item.autOkrug === areaName);

  filteredData.forEach((item) => {
    //마커 이미지
    const imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    const imageSize = new kakao.maps.Size(12, 18);
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    //마커 생성하고 지도에 추가
    const marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(item.lat, item.lng),
      image: markerImage,
      clickable: true,
    });
    markers.push(marker);

    //인포윈도우 내용
    var iwContent =
      '<div style="padding:10px;">' +
      "<h5>" +
      item.reliefAg +
      "</h5>" +
      "<br>" +
      "<p> 주소: " +
      item.roadAddr +
      "</p>" +
      "<br>" +
      "<p> 연락처: " +
      item.tel +
      "</p>" +
      "<br>" +
      "<p> 수용가능인원: " +
      item.accpNum +
      "</p>" +
      "</div > ";

    //인포윈도우 생성
    var infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
    });

    kakao.maps.event.addListener(
      marker,
      "mouseover",
      makeOverListener(map, marker, infowindow)
    );
    kakao.maps.event.addListener(
      marker,
      "mouseout",
      makeOutListener(infowindow)
    );
  });
  console.log(markers);
}
// 인포윈도우를 표시하는 클로저를 만드는 함수입니다
function makeOverListener(map, marker, infowindow) {
  return function () {
    infowindow.open(map, marker);
  };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다
function makeOutListener(infowindow) {
  return function () {
    infowindow.close();
  };
}

//마커 지우기
function removeMarker() {
  markers.forEach((marker) => {
    marker.setMap(null);
  });
  markers.length = 0;
}

//화면에 지도 생성
const mapContainer = document.getElementById("map"); // 지도 생성영역
const mapOption = {
  center: new kakao.maps.LatLng(35.179752695234136, 129.07470601185), // 지도 중심좌표
  level: 9, // 지도의 확대 레벨
};
const map = new kakao.maps.Map(mapContainer, mapOption); // 지도 객체 생성

//클러스터러
// var clusterer = new kakao.maps.MarkerClusterer({
//   map: map, //지도 객체
//   averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
//   minLevel: 7, // 클러스터 할 최소 지도 레벨
// });

let list;
(async () => {
  let list = await getData(url, queryParams);

  //지역 별 다각형 생성
  for (var i = 0, len = areas.length; i < len; i++) {
    displayArea(areas[i], list);
  }
})();
