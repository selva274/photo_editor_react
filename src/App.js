import React, { useState } from 'react'
import img from "./nature.jpg"
import "./App.css"
import Navbar from './Navbar'
export default function App() {
  const [imgeUrl,setImageUrl]=useState(img)
  const [blur, setBlur] = useState({
    name: "Blur",
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: "px"
  })
  const [brightness, setBrightness] = useState({
    name: "Brightness",
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: "%"
  })
  const [invert, setInvert] = useState({
    name: "invert",
    property: 'invert',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: "%"
  })
  const [opacity, setOpacity] = useState({
    name: "Opacity",
    property: 'opacity',
    value: 100,
    range: {
      min: 0,
      max: 100
    },
    unit: "%"
  })
  const [hue_rotate, setHue_rotate] = useState({
    name: "Hue_rotate",
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: "deg"
  })
  const [contrast, setContrast] = useState({
    name: "Contrast",
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: "%"
  })
  const [saturation, setSaturation] = useState({
    name: "Saturate",
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: "%"
  })
  const [grayscale, setGrayscale] = useState({
    name: "Grayscale",
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: "%"
  })
  const [sepia, setSepia] = useState({
    name: "sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: "%"
  })
  return (
    <div>
       <Navbar setImageUrl={setImageUrl}/>
       <div className='content'>
        <div className='image_wrapper'>
          <div className='image'>
          <img style={{
            filter: `${brightness.property}(${brightness.value}${brightness.unit})
           ${blur.property}(${blur.value}${blur.unit}) ${contrast.property}(${contrast.value}${contrast.unit})
            ${invert.property}(${invert.value}${invert.unit})
             ${opacity.property}(${opacity.value}${opacity.unit})
              ${hue_rotate.property}(${hue_rotate.value}${hue_rotate.unit})
               ${saturation.property}(${saturation.value}${saturation.unit})
                ${grayscale.property}(${grayscale.value}${grayscale.unit})
                 ${sepia.property}(${sepia.value}${sepia.unit})`
          }} src={imgeUrl} alt='' />
          </div>
        </div>
        <div className='ranges'>
        <div className='mode'>
          <label>{brightness.name}</label>
          <input type='range' value={brightness.value} max={brightness.range.max} min={brightness.range.min} onChange={(e) => { setBrightness({ ...brightness, value: `${e.target.value}` }) }} />
          <label>{blur.name}</label>
          <input type='range' max={blur.range.max} min={blur.range.min} onChange={(e) => { setBlur({ ...blur, value: `${e.target.value}` }) }} />
        </div>
        <div className='mode'>
          <label>{contrast.name}</label>
          <input type='range' value={contrast.value} max={contrast.range.max} min={contrast.range.min} onChange={(e) => { setContrast({ ...contrast, value: `${e.target.value}` }) }} />
          <label>{invert.name}</label>
          <input type='range' max={invert.range.max} min={invert.range.min} onChange={(e) => { setInvert({ ...invert, value: `${e.target.value}` }) }} />
        </div>
        <div className='mode'>
          <label>{opacity.name}</label>
          <input type='range' value={opacity.value} max={opacity.range.max} min={opacity.range.min} onChange={(e) => { setOpacity({ ...opacity, value: `${e.target.value}` }) }} />
          <label>{hue_rotate.name}</label>
          <input type='range' max={hue_rotate.range.max} min={hue_rotate.range.min} onChange={(e) => { setHue_rotate({ ...hue_rotate, value: `${e.target.value}` }) }} />
        </div>
        <div className='mode'>
          <label>{saturation.name}</label>
          <input type='range' value={saturation.value} max={saturation.range.max} min={saturation.range.min} onChange={(e) => { setSaturation({ ...saturation, value: `${e.target.value}` }) }} />
          <label>{grayscale.name}</label>
          <input type='range' max={grayscale.range.max} min={grayscale.range.min} onChange={(e) => { setGrayscale({ ...grayscale, value: `${e.target.value}` }) }} />
        </div>
        <div className='mode'>
          <label>{sepia.name}</label>
          <input type='range' value={sepia.value} max={sepia.range.max} min={sepia.range.min} onChange={(e) => { setSepia({ ...sepia, value: `${e.target.value}` }) }} />
        </div>    
        </div>
        </div>
    </div>
  )
}
