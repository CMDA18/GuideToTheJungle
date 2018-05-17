// @flow
import React from 'react'

type JungleProps = {
  color?: string
}

const defaultProps = {}

const Jungle = (props: JungleProps) => (
  <svg width="178px" height="97px" viewBox="0 0 178 97" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Menu/Blue/JungleMinds" transform="translate(-103.000000, -45.000000)" fill="#03344A" fillRule="nonzero">
        <g id="Menu">
          <g id="jungle" transform="translate(103.000000, 45.000000)">
            <path d="M124.229572,27.5056819 C123.974534,27.3196286 123.840128,27.2057861 123.690829,27.1151542 C123.046721,26.7242581 122.810672,26.2044142 123.076133,25.4679379 C123.215008,25.0825681 123.27644,24.6691982 123.366913,24.2672495 C123.484565,23.7422476 123.629024,23.1752456 123.064592,22.8281918 C122.494575,22.4778221 121.254387,23.1078243 120.059994,24.2285651 C119.113564,25.0420417 117.848059,27.3631025 117.181611,28.6732124 C115.799199,31.3903272 114.930583,34.2957059 114.247382,37.2574531 C114.049681,38.1110878 114.074254,38.9481435 114.252594,39.7933041 C114.451411,40.734255 114.948454,40.9273083 115.786168,40.4513065 C117.090394,39.7096723 119.467638,36.7420304 120.315776,35.5590263 C121.269652,34.2290214 121.853817,32.7070687 122.618556,31.2805374 C123.254101,30.0949542 123.685616,28.802897 124.229572,27.5056819 Z M111.131833,62.529016 C111.131833,62.529016 106.966723,62.6211216 104.353058,63.6243357 C102.204045,64.5044967 100.521172,65.9781862 99.0892412,67.7388767 C97.735869,69.4030403 97.2321242,71.3457313 97.5404027,73.4520021 C97.70385,74.5690585 98.6219836,75.4311669 99.8956798,75.1894818 C100.426604,75.0881656 100.92737,74.9315862 101.420318,74.7171643 C103.267382,73.9128984 104.677719,72.5729464 105.948809,71.0786252 C107.974958,68.6967746 109.085207,66.8439786 110.457195,64.0642319 C110.519744,63.9378631 110.999661,62.8786487 111.131833,62.529016 Z M119.645233,68.5007738 C119.097927,69.765568 115.839409,75.6437465 114.680014,77.2566997 C113.445783,78.9735476 111.961355,80.4395003 110.390923,81.8302947 C109.241208,82.8486141 108.104152,83.9037757 106.714292,84.6034096 C104.778989,85.5767815 102.815762,86.5350482 100.642175,86.836049 C98.4097628,87.145524 96.1669255,87.0781026 94.0853012,86.0966254 C91.5315793,84.8926212 89.3081024,83.3625631 87.9338806,80.7239222 C86.431954,77.8399122 86.439028,74.932323 87.0831362,71.8991016 C87.4334866,70.2474644 87.94505,68.6499849 88.7853695,67.1869798 C89.9492324,65.1617622 91.2586711,63.2467029 93.1891345,61.8120663 C94.1392872,61.106169 98.1372269,57.1504181 105.44916,56.1147829 C109.076271,55.601202 115.347578,55.2965168 115.297315,55.2987274 C115.297315,55.2987274 115.506557,55.1049373 115.777232,54.4601979 C116.951148,51.6623989 118.172347,48.8841259 119.35557,46.090379 C119.581567,45.5576404 120.308329,43.8776344 120.308329,43.8776344 C119.627362,44.7239006 116.636539,47.3282783 115.538577,48.2692289 C114.572787,49.097074 113.448389,49.7480761 112.265166,50.2251832 C109.674585,51.2696605 106.582865,50.4606049 105.609628,47.1565933 C105.576864,47.0453298 105.547079,46.9336978 105.517294,46.826487 C105.162475,46.772329 105.122265,47.0641193 105.008709,47.241699 C103.732406,49.2392849 102.278136,51.1016599 100.597497,52.7779816 C98.9038274,54.4679351 96.1695317,55.7710449 94.4308115,55.6347287 C93.0673868,55.5275176 91.3778126,55.0445158 90.1245934,54.0390914 C89.0437574,53.1718253 88.5809673,51.9722419 88.343057,50.6695006 C88.1364209,49.5366017 88.0839242,48.4014926 88.1855668,47.2431727 C88.2916772,46.0384316 88.4204989,44.8465854 88.6971302,43.6676337 C89.49091,40.2855165 91.7966689,35.6393423 92.3592398,34.5064435 C93.1064799,33.0032803 93.8998874,31.5222224 94.7003689,30.045954 C94.8891336,29.6989002 95.2540042,29.0873191 95.6170133,28.4466326 C95.9316211,27.8917886 96.5124354,26.6538894 96.6040256,26.4390992 C96.8222031,25.927729 97.1472361,24.9127254 96.6349277,24.5354609 C96.1274598,24.1618807 95.6091947,24.388092 95.1311396,24.6588824 C94.083812,25.2535161 91.9560207,27.756946 91.2091529,28.670265 C90.1044884,30.0629015 88.0143009,33.1856493 87.1780772,35.3600781 C86.6065708,36.8455571 86.0957516,37.7772971 85.6515776,39.3033024 C84.9378461,41.2065725 83.4951177,46.6256966 82.2802477,52.1870322 C81.9451622,53.7200375 81.0154867,54.3548294 79.890345,54.8389364 C78.3370386,55.4103594 75.453816,55.8753085 74.1127305,55.5039387 C73.6867999,55.3860433 73.427295,55.0677266 73.2541675,54.6643039 C72.9120081,53.8651961 72.9477507,53.0517196 73.1387492,52.2349272 C73.6681841,49.9691295 74.2683588,47.7228585 75.0189498,45.5171138 C75.2825504,44.7419533 75.7773597,43.0796315 75.6005091,42.986789 C75.4206799,42.9182627 74.7694974,43.9004767 74.5286083,44.323057 C73.56952,45.9039572 72.6513863,47.2549623 71.7306464,48.8575992 C70.6155571,50.5954477 69.6307787,52.4161908 68.4136748,54.089565 C67.8246692,54.8993575 67.1530094,55.6343602 66.2639166,56.17152 C64.4336063,57.2775237 62.2000769,56.3199943 61.4509752,54.657304 C60.8928721,53.4197734 60.6478875,52.1361897 60.5711903,50.8098695 C60.5220444,49.9580771 60.5503406,49.104074 60.7204896,48.2592815 C60.7953252,47.8879117 60.8195257,47.5065945 60.8653208,47.1440668 C60.5689564,46.9996454 60.5201828,47.2376462 60.4326885,47.3548047 C59.4147737,48.7319673 58.4314849,50.1327092 57.5010648,51.5702933 C55.9764268,53.9259856 54.4506717,56.2809414 52.4360649,58.2770536 C50.94084,59.7588483 49.2750939,60.8578524 47.0434261,60.8062731 C45.999077,60.7819573 45.1729054,60.3984295 44.4826298,59.6004266 C43.0067653,57.8938945 42.6672124,55.8730979 42.7398142,53.7377217 C42.8336382,50.9756596 43.6069404,48.3429133 44.3608821,45.7057462 C44.9029757,43.8105814 45.3594362,41.8907328 45.9264752,40.0033051 C46.2987922,38.7643005 46.7280736,37.5411382 47.0475215,36.2862919 C47.1193786,36.0033437 47.185651,35.7760269 47.2154362,35.5251312 C46.8043985,35.7189214 46.255231,36.0118173 45.8393528,36.1949232 C43.7890034,37.0979262 42.3068095,36.256818 42.0238489,34.0525471 C41.9426835,33.4214396 42.0551233,32.8831746 42.5722714,32.4661205 C42.825075,32.2620145 43.0633575,32.0383821 43.3250966,31.8456973 C45.8858925,29.9590064 48.3182391,27.9367361 50.2676909,25.4064114 C50.6992063,24.846041 51.0931175,24.2576705 51.5000601,23.678879 C51.880568,23.1376665 52.3407516,22.6974018 52.9647548,22.4288219 C53.2186749,22.3194005 53.4714781,22.2276633 53.7388019,22.264874 C55.2072197,22.4682431 56.5758572,22.8889814 57.6581824,23.9780379 C58.2833026,24.6073033 58.5554665,25.3544638 58.5487644,26.2128879 C58.5357334,27.8166304 58.2375075,29.3798465 57.7587081,30.9032729 C56.91057,33.6008613 56.0091905,36.2818706 55.1558403,38.977617 C54.4618412,41.1689934 53.9238434,43.4027379 53.3824945,45.6350089 C53.2998402,45.9765367 53.2663315,46.3342747 53.2518113,46.686118 C53.2369187,47.043856 53.2842027,47.3986469 53.6926345,47.6311214 C54.2466422,47.6329636 54.5493359,47.2262253 54.8282011,46.8095397 C56.8785506,43.7461075 61.0786582,36.5091874 62.9193934,32.0884876 C63.635359,30.4397975 64.3706847,28.7992128 65.1115955,27.1615755 C65.6950164,25.8720972 66.3219981,24.6021454 66.8868029,23.3052987 C67.3384232,22.269295 67.8764213,21.2638704 68.6083965,20.4282885 C69.3452118,19.5875487 70.2678133,18.9192306 71.5753904,19.2007053 C72.4179435,19.3823375 73.2742725,19.4899168 74.0725201,19.8373391 C75.1138907,20.2904986 75.6127954,21.1923965 75.5159929,22.0500837 C75.4430188,22.6959281 75.3975964,23.3399304 75.183514,23.9581431 C73.9079559,27.6397877 72.7608476,31.2632215 71.7827708,35.0240768 C70.8054387,38.4780363 70.0608048,42.0355226 70.4718429,42.4183136 C70.8352243,42.1611548 71.0124472,41.8723117 71.2000949,41.5893631 C72.6554818,39.3943027 73.9124241,37.094979 74.9850691,34.6921283 C75.8499614,32.7557005 76.8049543,30.8583253 77.662028,28.9185817 C78.6505295,26.6815211 79.5284528,24.3991447 80.3713785,22.103505 C80.7366215,21.1087646 81.1342559,20.1250769 81.5400815,19.1461788 C81.8706989,18.3489128 82.380773,17.652963 82.9303129,16.9956975 C83.3126823,16.5384853 83.8257354,16.1730104 84.3838385,15.9983782 C86.5075343,15.3330074 88.5887862,15.289902 90.5564811,16.5561696 C91.2862224,17.0262766 91.6507208,17.598068 91.4790826,18.4741764 C91.240055,19.5787066 90.7709359,21.6801877 90.7709359,21.6801877 C91.3431869,21.1820807 92.5029544,19.8178127 93.0502603,19.3410742 C94.4449595,18.1260173 96.0027336,17.1301717 97.6915636,16.4051165 C99.7504763,15.5209028 101.895394,15.3031652 103.985209,16.3922217 C105.601809,17.235172 106.455532,18.537545 106.65919,20.3888674 C106.986829,23.3682989 106.2623,26.1115718 105.108862,28.798476 C103.885056,31.647486 102.433764,34.8726553 101.147037,37.6918231 C100.260178,39.6352509 99.5095871,41.1104141 99.0929644,43.1960531 C98.9861093,43.7324761 98.8066529,44.6454265 99.2787505,44.8395851 C99.6134637,45.0904807 100.668238,44.5839001 101.28889,43.6473704 C102.380895,41.9994173 103.167229,40.3971485 104.017973,38.6073526 C105.588406,35.3048147 107.199422,32.0218031 108.696136,28.6846334 C109.479118,26.9386799 110.338054,25.211516 111.334001,23.5779312 C112.948368,20.9297114 115.044512,18.6904403 117.667485,16.9603289 C119.115053,16.0053782 120.752504,15.6163242 122.417133,15.2563756 C124.459664,14.8150056 126.467569,14.9177954 128.357822,15.7662721 C129.777094,16.4032744 130.694111,17.6220155 131.054514,19.1126523 C131.529963,21.078554 131.361303,23.0311925 130.525079,24.9064622 C130.149784,25.7479389 129.448711,26.7017844 128.592382,27.2374705 C128.592382,27.2374705 129.721991,27.4817345 130.164304,27.6169455 C131.158762,27.9208939 131.597352,28.6024753 131.624903,29.5942682 C131.655433,30.6881142 131.574268,31.7738549 131.356835,32.8463323 C130.840804,35.3884466 128.676898,43.5725807 128.177248,45.1641652 C127.227095,48.3908083 126.069562,51.6038196 124.957079,54.8043045 C124.850969,55.1089897 124.688638,55.6966235 124.628323,55.9206244 C124.628323,55.9206244 140.196012,57.5707882 151.711031,60.8526943 C153.954241,61.4919071 160.249376,63.4953879 162.307916,64.2524958 C164.176947,64.939972 165.057104,65.2671308 166.852789,66.1181867 C168.488005,66.8937157 170.300444,68.5460898 169.957913,70.289096 C169.632135,71.9469966 168.479815,73.5816867 167.964528,74.0271091 C166.452549,75.3339032 163.758835,74.0698463 163.047338,73.7828452 C160.005136,72.3445243 156.73731,70.4268859 151.38786,68.8504069 C142.181578,66.1366079 136.033136,64.9897088 133.669296,64.5505495 C130.543695,63.9695476 127.395383,63.5049669 124.252283,63.0168071 C123.494246,62.8985436 122.719082,62.889333 121.856423,62.8226485 C121.166148,64.8010768 120.451671,66.6395041 119.645233,68.5007738 Z" id="Fill-1"></path>
            <path d="M0.0141768391,72.345856 C0.0529706385,68.5794577 0.249177739,65.1566773 0.819148175,61.7774546 C1.39881706,58.3386662 2.14895485,54.9326386 3.8901996,51.836724 C4.48628126,50.7772034 5.17151403,49.7761311 6.05295392,48.9597121 C7.2428791,47.8581235 8.71629745,47.5398203 10.2837162,47.9567787 C11.3885934,48.2505109 12.4595261,48.6927843 13.4625696,49.232224 C14.6487646,49.8710638 15.3019179,50.9469648 14.9904485,52.3996174 C14.8028208,53.2748575 14.5857247,54.1433961 14.3883985,55.0164024 C13.8027614,57.6041496 13.1317032,60.1766328 12.6583443,62.7852277 C12.0641277,66.0624448 11.4102284,69.3519474 11.3057836,72.6861239 C11.206934,75.8136827 11.5120621,79.8254165 12.2707793,83.3293548 C12.5382327,84.5638487 12.9851074,85.7581362 13.514046,86.9111002 C14.1880882,88.379389 15.7290227,89.3261075 17.137536,89.1418266 C18.063365,89.0208343 18.8127567,88.5067101 19.4920213,87.9211072 C20.3596595,87.1735605 21.0803289,86.2957145 21.7316171,85.3411782 C24.3084206,81.0788971 26.2033485,74.8416488 26.4969131,72.8838067 C26.8020413,70.8466679 27.270178,68.8374507 27.4022261,66.7664341 C27.7909102,62.7841108 27.5644886,55.8067619 27.4835439,53.9293329 C27.3805911,51.2083083 27.162749,36.7521434 20.8259311,19.0760932 C20.6916449,18.666953 18.927273,14.2118289 18.192802,12.3820524 C17.3758941,10.3467751 17.2740604,9.54934252 19.3416953,8.21768219 C20.155619,7.69350616 25.221567,5.45570628 26.8863432,4.72007285 C27.8864026,4.27779931 28.282547,4.06150225 29.3665352,4.00528736 C30.8399536,3.92859682 31.8888782,4.69364071 32.7270481,5.8142159 C34.1885299,8.09371157 35.7249881,11.9140913 36.1979742,13.315741 C37.1573744,16.1588748 37.8153769,19.0794438 38.4200382,22.0089476 C38.9187624,24.4258161 39.3369146,26.8635325 39.6901621,29.3064609 C40.830476,35.7596341 41.0442149,45.7614193 40.9931115,47.4046815 C40.8875475,50.7980511 40.8774762,54.1925377 40.5809274,57.5818124 C40.3735296,59.9487947 37.2655496,96.7516866 17.029361,97 C5.80750855,96.7207868 1.04482364,84.6025663 0.495369158,79.6619838 C0.392416382,79.2465148 -0.0880299012,74.1413827 0.0141768391,72.345856" id="Fill-3"></path>
            <path d="M171.090045,28.2073296 C170.667371,29.2323613 169.893818,30.0608219 169.065773,30.7977752 C166.690623,32.911856 163.771667,33.7275131 160.749619,34.4335874 C160.484527,34.5021237 159.955079,34.6248865 159.882547,34.5748023 C159.882547,34.5748023 160.478636,33.647303 160.987097,32.8802239 C162.705408,30.5187346 164.732257,28.7575028 167.320585,27.365689 C168.070942,26.9620027 168.680654,26.4314114 169.671803,26.3613688 C170.623557,26.2943388 171.403737,27.451171 171.090045,28.2073296 M151.66028,13.5661717 C153.653256,10.555094 155.251539,8.17854186 156.329948,8.89967917 C157.554525,9.71872543 156.821104,12.5189222 154.55015,15.316483 C152.279196,18.1140437 151.267797,19.0822129 149.55869,19.6515912 C148.789923,19.9076608 148.315703,19.8726396 148.315703,19.8726396 C148.663637,18.7143011 150.414716,15.4479069 151.66028,13.5661717 M176.050577,21.5559208 C175.549848,21.1062927 174.932405,20.8957884 174.375712,20.5647807 C173.524472,20.05829 170.822744,19.5156484 169.409288,19.5589543 C168.615117,19.5796658 167.370658,19.8477858 166.599314,20.0782484 C164.2087,20.7926074 161.968306,21.8221579 159.99153,23.3962331 C158.272114,24.7650759 156.676408,26.2683553 155.146239,27.8597527 C153.753033,29.3080525 151.985754,31.9067827 151.04615,33.6804415 C151.04615,33.6804415 150.785476,33.6552111 150.082983,33.6559642 C149.225484,33.6567174 148.756419,34.1281868 148.429472,34.8847219 C147.226617,37.6698559 145.765298,40.2998415 144.326807,42.9418776 C144.050669,43.4950635 143.199429,44.9188858 142.319103,44.7893447 C141.933616,44.7366245 141.653428,44.4749064 141.545919,44.2372886 C140.629879,42.2162213 140.967134,39.5881185 141.565432,37.6815296 C142.213803,35.6164033 144.810231,29.3265045 146.76602,25.8665519 C146.76602,25.8665519 150.246088,24.4385871 151.459252,23.8880374 C155.188211,22.1949652 158.454365,17.8406517 159.63071,15.9133512 C160.966479,13.7247089 161.752182,11.8339359 162.650917,9.26759097 C162.973078,8.39695421 163.909735,5.03754655 163.161219,3.08915789 C161.919705,-0.0412933921 157.749294,-0.571508166 155.748586,0.51528149 C154.536895,1.17315451 153.859806,1.77454157 152.835153,2.6847185 C150.761545,4.52540728 148.881601,6.54195565 147.233613,8.79499185 C145.590779,11.0412498 144.322388,13.5288909 142.777491,15.8365303 C142.298117,16.5523955 140.392032,19.9825989 140.392032,19.9825989 C139.480779,19.8805476 137.760627,18.9010813 136.846428,18.1584793 C135.418614,16.9993876 133.805603,18.6902004 133.662011,18.8400764 C132.566298,19.9844818 132.430806,21.3461697 133.310764,22.5948857 C133.676739,23.1145565 134.196982,23.4741837 134.72017,23.8123462 C135.588346,24.37344 136.7102,24.972191 137.699509,25.13713 C136.90276,26.9691576 134.903893,31.1622979 134.440719,32.3488794 C133.697357,34.1488983 133.017322,35.9730178 132.455107,37.8423263 C131.859018,39.8234768 131.163152,41.7771375 131.026188,43.8731427 C130.880387,46.117141 131.348348,48.3490893 132.306361,50.2421216 C133.657225,52.3757844 135.589819,53.4535361 138.076528,53.5397715 C138.912304,53.5691442 139.71568,53.406088 140.52826,53.2784298 C141.792233,53.0799756 142.852969,52.4526052 143.808404,51.6192492 C145.361401,50.2647161 146.752397,48.7655791 147.789201,46.9482378 C147.921011,46.7162689 148.422845,46.013207 148.422845,46.013207 C148.692355,47.1406664 148.931306,48.6296361 149.365394,49.6855468 C150.284011,51.9212607 151.771103,53.6651701 153.706642,55.0219625 C155.669795,56.3975837 157.811517,57.0611055 160.234899,56.9955817 C160.904624,56.9070871 161.578399,56.7963745 162.228243,56.6141132 C163.559961,56.2401763 164.835348,55.7562799 165.998807,54.9330916 C167.119557,54.1400287 168.147156,53.2415257 169.117687,52.2891723 C170.343737,51.086775 171.509774,49.5635371 172.234358,48.1894224 C172.58855,47.3074883 172.78737,46.4349687 172.523014,45.4709419 C172.184653,44.2376653 171.237686,43.5523025 170.326433,42.8714584 C169.756117,42.4455544 169.100383,42.6556823 168.590081,43.2137633 C168.088247,43.76243 167.588254,44.3110972 167.203134,44.9618151 C166.71161,45.7921588 166.048512,46.4861828 165.370318,47.150834 C163.872181,48.6175856 162.114106,49.3311914 159.994107,49.0988461 C158.400978,48.9244929 157.234574,47.3865686 157.027655,45.7270114 C156.840986,44.2290042 156.776922,42.723842 157.255192,41.253701 C157.392524,40.831186 157.480152,40.3860769 157.765494,40.0663664 C157.765494,40.0663664 158.458415,40.2128531 159.167904,40.1770787 C162.213147,40.0226837 165.1958,39.5756917 168.034124,38.3650096 C170.796603,37.1867125 173.137511,35.4111708 175.165097,33.1754571 C176.679802,31.5049793 177.49901,29.4696023 177.878607,27.2930104 C178.258204,25.1149122 177.774043,23.1047656 176.050577,21.5559208" id="Fill-6"></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
)

Jungle.defaultProps = defaultProps

export default Jungle
