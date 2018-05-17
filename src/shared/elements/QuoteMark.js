// @flow
import React from 'react'
import styled from 'styled-components'

type QuoteMarkProps = {
  color?: string
}

const defaultProps = {}

const QuoteMark = (props: QuoteMarkProps) => (
  <Quote width="44px" height="38px" viewBox="0 0 44 38" version="1.1">
    <filter x="-1.1%" y="-1.7%" width="102.3%" height="106.4%" filterUnits="objectBoundingBox" id="filter-1">
      <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
      <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
      <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
      <feMerge>
        <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
        <feMergeNode in="SourceGraphic"></feMergeNode>
      </feMerge>
    </filter>
    <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Testimonial" transform="translate(-602.000000, 1.000000)" fill="#FFA000">
        <g id="teams-copy-4" filter="url(#filter-1)" transform="translate(0.000000, -1.000000)">
          <path d="M632.521676,36 C631.061645,35.613381 629.813337,34.9739822 628.776715,34.0817844 C627.740094,33.1895866 626.900588,32.1561397 626.258175,30.9814126 C625.615761,29.8066856 625.148558,28.5204531 624.856552,27.1226766 C624.564546,25.7249001 624.418545,24.3271445 624.418545,22.929368 C624.418545,19.8958956 624.951449,17.1524286 626.017271,14.6988848 C627.083094,12.2453409 628.455502,10.066924 630.134537,8.16356877 C631.813573,6.26021353 633.675084,4.63197703 635.719127,3.27881041 C637.763171,1.92564379 639.777983,0.832717918 641.763625,0 L644.085062,3.92565056 L643.997461,4.9070632 C642.858637,5.29368223 641.74173,5.97025539 640.646707,6.93680297 C639.551684,7.90335056 638.588078,9.04832052 637.75586,10.3717472 C636.923643,11.6951739 636.252039,13.1375387 635.741028,14.6988848 C635.230017,16.2602309 634.974515,17.8141187 634.974515,19.3605948 C634.974515,20.3122724 635.084016,21.2118917 635.303021,22.0594796 C635.522025,22.9070674 635.835927,23.6505544 636.244736,24.2899628 C636.653544,24.9293712 637.135347,25.4498121 637.690159,25.8513011 C638.244971,26.2527901 638.872775,26.4981408 639.57359,26.5873606 L639.354586,28.4163569 L632.521676,36 Z M611.103131,36 C609.6431,35.613381 608.394792,34.9739822 607.35817,34.0817844 C606.321548,33.1895866 605.482043,32.1561397 604.83963,30.9814126 C604.197216,29.8066856 603.730013,28.5204531 603.438007,27.1226766 C603.146001,25.7249001 603,24.3271445 603,22.929368 C603,19.8958956 603.532903,17.1524286 604.598726,14.6988848 C605.664548,12.2453409 607.036957,10.066924 608.715992,8.16356877 C610.395028,6.26021353 612.256539,4.63197703 614.300582,3.27881041 C616.344625,1.92564379 618.359438,0.832717918 620.34508,0 L622.666517,3.92565056 L622.578916,4.9070632 C621.440092,5.29368223 620.323185,5.97025539 619.228162,6.93680297 C618.133138,7.90335056 617.169533,9.04832052 616.337315,10.3717472 C615.505097,11.6951739 614.833493,13.1375387 614.322483,14.6988848 C613.811472,16.2602309 613.55597,17.8141187 613.55597,19.3605948 C613.55597,20.3122724 613.665471,21.2118917 613.884475,22.0594796 C614.10348,22.9070674 614.417382,23.6505544 614.826191,24.2899628 C615.234999,24.9293712 615.716802,25.4498121 616.271614,25.8513011 C616.826426,26.2527901 617.454229,26.4981408 618.155044,26.5873606 L617.936041,28.4163569 L611.103131,36 Z" id="“"></path>
        </g>
      </g>
    </g>
  </Quote>

)
QuoteMark.defaultProps = defaultProps

export default QuoteMark

const Quote = styled.svg`
  margin: auto;
  display: block;
  `