import L from 'leaflet';

export function addTileLayer(map) {
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWEtc3RlcGFub3YiLCJhIjoiY2t5MmVpbDR2MGtzbDJ2cXRnNXpxdzJpdyJ9.BYDjunSCWGeTeWBil3R0og', {
      attribution: 'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://github.com/ia-stepanov/ip-address-tracker">Igor Stepanov</a>.',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
    }).addTo(map);
}
