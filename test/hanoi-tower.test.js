const chai = require('chai');
const { expect, assert } = chai;
it.optional = require('../extensions/it-optional');

Object.freeze(assert);

const calculateHanoi = require('../src/hanoi-tower.js');

describe('Hanoi tower', () => {
    //Presence requirement
    describe('variable presence', () => {
        it.optional('function calculateHanoi exists', () => {
            expect(calculateHanoi).to.exist;
        });
    });
    
    //Functional requirements
    describe('base requirements', () => {
        it.optional('returns correct answer', () => {
            assert.deepEqual(calculateHanoi(414, 19279842), {turns: 4.230758200257591e+124, seconds: 7.899820714779368e+120});
            // assert.deepEqual(calculateHanoi(736, 78853564), {turns: 3.6147378671465184e+221, seconds: 1.6502813140731933e+217});
            assert.deepEqual(calculateHanoi(243, 58252885), {turns: 1.4134776518227075e+73, seconds: 8.735223236689046e+68});
            assert.deepEqual(calculateHanoi(567, 91326398), {turns: 4.830671903771573e+170, seconds: 1.9042050529111707e+166});
            assert.deepEqual(calculateHanoi(399, 47821443), {turns: 1.2911249390434543e+120, seconds: 9.719593322511065e+115});
            assert.deepEqual(calculateHanoi(763, 89281237), {turns: 4.8516190384397154e+229, seconds: 1.9562708946766694e+225});
            assert.deepEqual(calculateHanoi(349, 73223765), {turns: 1.1467493079950358e+105, seconds: 5.637920296480424e+100});
            assert.deepEqual(calculateHanoi(928, 18777486), {turns: 2.269007733883336e+279, seconds: 4.3501179241885784e+275});
            assert.deepEqual(calculateHanoi(771, 17511855), {turns: 1.2420144738405671e+232, seconds: 2.5532715442344868e+228});
            assert.deepEqual(calculateHanoi(143, 71991284), {turns: 1.1150372599265312e+43, seconds: 5.57586128861865e+38});
            assert.deepEqual(calculateHanoi(171, 82922622), {turns: 2.9931553532536892e+51, seconds: 1.2994474863220414e+47});
            assert.deepEqual(calculateHanoi(427, 67748239), {turns: 3.4658371176510186e+128, seconds: 1.841673497010552e+124});
            assert.deepEqual(calculateHanoi(878, 38337969), {turns: 2.0152837033678636e+264, seconds: 1.892385413563329e+260});
            assert.deepEqual(calculateHanoi(872, 56576738), {turns: 3.148880786512287e+262, seconds: 2.003645178596941e+258});
            assert.deepEqual(calculateHanoi(868, 38673496), {turns: 1.9680504915701793e+261, seconds: 1.831999302481639e+257});
            assert.deepEqual(calculateHanoi(744, 96646943), {turns: 9.253728939895087e+223, seconds: 3.4469195972005354e+219});
            assert.deepEqual(calculateHanoi(897, 47171251), {turns: 1.0565890622713305e+270, seconds: 8.06364161123645e+265});
            assert.deepEqual(calculateHanoi(578, 21544429), {turns: 9.893216058924181e+173, seconds: 1.653122383151907e+170});
            assert.deepEqual(calculateHanoi(818, 25851269), {turns: 1.7479799754928565e+246, seconds: 2.434204646500829e+242});
            assert.deepEqual(calculateHanoi(344, 29772812), {turns: 3.583591587484487e+103, seconds: 4.3331243669372423e+99});
            assert.deepEqual(calculateHanoi(661, 38283196), {turns: 9.568131466127622e+198, seconds: 8.997491556885542e+194});
            assert.deepEqual(calculateHanoi(212, 56959942), {turns: 6.582018229284824e+63, seconds: 4.159987667372514e+59});
            assert.deepEqual(calculateHanoi(453, 26254235), {turns: 2.325883917745942e+136, seconds: 3.1892691232044625e+132});
            assert.deepEqual(calculateHanoi(665, 44559553), {turns: 1.5309010345804195e+200, seconds: 1.2368265284190598e+196});
            assert.deepEqual(calculateHanoi(881, 87671441), {turns: 1.612226962694291e+265, seconds: 6.620191249850047e+260});
            assert.deepEqual(calculateHanoi(829, 89836673), {turns: 3.57986298980937e+249, seconds: 1.434548534907758e+245});
            assert.deepEqual(calculateHanoi(464, 94314436), {turns: 4.7634102635436893e+139, seconds: 1.8182027774366674e+135});
            assert.deepEqual(calculateHanoi(813, 54917666), {turns: 5.462437423415177e+244, seconds: 3.5807739397181656e+240});
            assert.deepEqual(calculateHanoi(388, 35826136), {turns: 6.304320991423117e+116, seconds: 6.3349158193122535e+112});
            assert.deepEqual(calculateHanoi(719, 34128487), {turns: 2.7578261315509936e+216, seconds: 2.90905778318962e+212});
            assert.deepEqual(calculateHanoi(627, 23158944), {turns: 5.569385519558344e+188, seconds: 8.657470681914529e+184});
            assert.deepEqual(calculateHanoi(658, 61518638), {turns: 1.1960164332659527e+198, seconds: 6.9989507240999544e+193});
            assert.deepEqual(calculateHanoi(473, 53973463), {turns: 2.438866054934369e+142, seconds: 1.626710110811998e+138});
            assert.deepEqual(calculateHanoi(845, 42193444), {turns: 2.346099009001469e+254, seconds: 2.001722455366594e+250});
            assert.deepEqual(calculateHanoi(431, 25476858), {turns: 5.54533938824163e+129, seconds: 7.835825672722228e+125});
            assert.deepEqual(calculateHanoi(541, 42323348), {turns: 7.198262071269114e+162, seconds: 6.1228009316675075e+158});
            assert.deepEqual(calculateHanoi(116, 92815836), {turns: 8.307674973655724e+34, seconds: 3.222255079958619e+30});
            assert.deepEqual(calculateHanoi(864, 78112514), {turns: 1.2300315572313621e+260, seconds: 5.668891422484371e+255});
            assert.deepEqual(calculateHanoi(414, 96991396), {turns: 4.230758200257591e+124, seconds: 1.5703175899156383e+120});
            assert.deepEqual(calculateHanoi(919, 43412695), {turns: 4.431655730240891e+276, seconds: 3.674952828629323e+272});
            assert.deepEqual(calculateHanoi(418, 57977669), {turns: 6.769213120412146e+125, seconds: 4.203198861527828e+121});
            assert.deepEqual(calculateHanoi(948, 37721566), {turns: 2.379227053564453e+285, seconds: 2.2706420493868227e+281});
            assert.deepEqual(calculateHanoi(133, 92944378), {turns: 1.0889035741470031e+40, seconds: 4.217633117012426e+35});
            assert.deepEqual(calculateHanoi(535, 61891748), {turns: 1.1247284486357991e+161, seconds: 6.542103827943067e+156});
            assert.deepEqual(calculateHanoi(575, 56173717), {turns: 1.2366520073655227e+173, seconds: 7.925320709177712e+168});
            assert.deepEqual(calculateHanoi(384, 29564582), {turns: 3.940200619639448e+115, seconds: 4.79787680769578e+111});
            assert.deepEqual(calculateHanoi(418, 57132412), {turns: 6.769213120412146e+125, seconds: 4.2653839353892015e+121});
            assert.deepEqual(calculateHanoi(997, 23587654), {turns: 1.3393857589828342e+300, seconds: 2.044200212678295e+296});
            assert.deepEqual(calculateHanoi(788, 64589644), {turns: 1.6279332111523082e+237, seconds: 9.073528196173847e+232});
            assert.deepEqual(calculateHanoi(181, 17548965), {turns: 3.064991081731778e+54, seconds: 6.2875319964649774e+50});
            assert.deepEqual(calculateHanoi(456, 93548991), {turns: 1.8607071341967536e+137, seconds: 7.16046812638344e+132});
            assert.deepEqual(calculateHanoi(384, 61295213), {turns: 3.940200619639448e+115, seconds: 2.3141647669455055e+111});
            assert.deepEqual(calculateHanoi(283, 56191489), {turns: 1.5541351137805833e+85, seconds: 9.95682176994829e+80});
            assert.deepEqual(calculateHanoi(751, 29253759), {turns: 1.1844773043065711e+226, seconds: 1.4576308964272442e+222});
            assert.deepEqual(calculateHanoi(887, 92287796), {turns: 1.0318252561243462e+267, seconds: 4.024986057796468e+262});
            assert.deepEqual(calculateHanoi(335, 55886994), {turns: 6.999202319305638e+100, seconds: 4.5085853695227e+96});
            assert.deepEqual(calculateHanoi(355, 81496472), {turns: 7.339195571168229e+106, seconds: 3.2419935989628636e+102});
            assert.deepEqual(calculateHanoi(784, 57858431), {turns: 1.0174582569701926e+236, seconds: 6.330710428515929e+231});
            assert.deepEqual(calculateHanoi(579, 38459234), {turns: 1.9786432117848363e+174, seconds: 1.852121017913516e+170});
            assert.deepEqual(calculateHanoi(167, 92464512), {turns: 1.8707220957835557e+50, seconds: 7.283442478797489e+45});
            assert.deepEqual(calculateHanoi(659, 14137537), {turns: 2.3920328665319055e+198, seconds: 6.091102233376904e+194});
            assert.deepEqual(calculateHanoi(976, 26184959), {turns: 6.386688990511104e+293, seconds: 8.780644020042183e+289});
            assert.deepEqual(calculateHanoi(259, 65861444), {turns: 9.263367138985296e+77, seconds: 5.0633754249826446e+73});
            assert.deepEqual(calculateHanoi(544, 76644626), {turns: 5.758609657015292e+163, seconds: 2.7048203960516487e+159});
            assert.deepEqual(calculateHanoi(334, 41461375), {turns: 3.499601159652819e+100, seconds: 3.0386267157686275e+96});
            assert.deepEqual(calculateHanoi(919, 47118867), {turns: 4.431655730240891e+276, seconds: 3.3858964878903405e+272});
            assert.deepEqual(calculateHanoi(597, 74123793), {turns: 5.186894461101241e+179, seconds: 2.519139847574242e+175});
            assert.deepEqual(calculateHanoi(224, 47242246), {turns: 2.695994666715064e+67, seconds: 2.0544283182840694e+63});
            assert.deepEqual(calculateHanoi(414, 19497265), {turns: 4.230758200257591e+124, seconds: 7.811726168222736e+120});
            assert.deepEqual(calculateHanoi(213, 26711114), {turns: 1.3164036458569648e+64, seconds: 1.774187750119697e+60});
            assert.deepEqual(calculateHanoi(746, 66492287), {turns: 3.701491575958035e+224, seconds: 2.00404742785414e+220});
            assert.deepEqual(calculateHanoi(993, 23294884), {turns: 8.371160993642713e+298, seconds: 1.2936823199941142e+295});
            assert.deepEqual(calculateHanoi(721, 35532516), {turns: 1.1031304526203975e+217, seconds: 1.1176438024916195e+213});
            assert.deepEqual(calculateHanoi(388, 51417738), {turns: 6.304320991423117e+116, seconds: 4.41395449351024e+112});
            assert.deepEqual(calculateHanoi(676, 89895587), {turns: 3.135285318820699e+203, seconds: 1.2555707709828423e+199});
            assert.deepEqual(calculateHanoi(675, 47395598), {turns: 1.5676426594103496e+203, seconds: 1.1907252597334584e+199});
            assert.deepEqual(calculateHanoi(515, 97348746), {turns: 1.0726246343954078e+155, seconds: 3.9666136878881504e+150});
            assert.deepEqual(calculateHanoi(713, 57411323), {turns: 4.309103330548428e+214, seconds: 2.702040499915729e+210});
            assert.deepEqual(calculateHanoi(149, 89129554), {turns: 7.1362384635298e+44, seconds: 2.8823726043448255e+40});
            assert.deepEqual(calculateHanoi(433, 29519245), {turns: 2.218135755296652e+130, seconds: 2.7051127896624546e+126});
            assert.deepEqual(calculateHanoi(849, 78291127), {turns: 3.75375841440235e+255, seconds: 1.7260615359194486e+251});
            assert.deepEqual(calculateHanoi(956, 51961698), {turns: 6.090821257125e+287, seconds: 4.2198306386465655e+283});
            assert.deepEqual(calculateHanoi(836, 68518827), {turns: 4.582224626955994e+251, seconds: 2.4075147487626397e+247});
            assert.deepEqual(calculateHanoi(955, 72774778), {turns: 3.0454106285625e+287, seconds: 1.5064942228782888e+283});
            assert.deepEqual(calculateHanoi(143, 32791754), {turns: 1.1150372599265312e+43, seconds: 1.224129131895632e+39});
            assert.deepEqual(calculateHanoi(971, 51433778), {turns: 1.99584030953472e+292, seconds: 1.3969467913333123e+288});
            assert.deepEqual(calculateHanoi(842, 66496392), {turns: 2.932623761251836e+253, seconds: 1.5876719357204536e+249});
            assert.deepEqual(calculateHanoi(288, 94985466), {turns: 4.9732323640978664e+86, seconds: 1.8848816839780857e+82});
            assert.deepEqual(calculateHanoi(722, 51255546), {turns: 2.206260905240795e+217, seconds: 1.5495960688560145e+213});
            assert.deepEqual(calculateHanoi(863, 24179387), {turns: 6.150157786156811e+259, seconds: 9.156794599534107e+255});
            assert.deepEqual(calculateHanoi(564, 88622557), {turns: 6.038339879714466e+169, seconds: 2.452877044268998e+165});
            assert.deepEqual(calculateHanoi(421, 49788187), {turns: 5.415370496329717e+126, seconds: 3.915654487838045e+122});
            assert.deepEqual(calculateHanoi(312, 69876349), {turns: 8.343699359066055e+93, seconds: 4.2986386842617946e+89});
            assert.deepEqual(calculateHanoi(338, 44923212), {turns: 5.599361855444511e+101, seconds: 4.487146350888765e+97});
            assert.deepEqual(calculateHanoi(534, 68434272), {turns: 5.623642243178996e+160, seconds: 2.9583294281912407e+156});
            assert.deepEqual(calculateHanoi(922, 72491697), {turns: 3.5453245841927125e+277, seconds: 1.760638670535436e+273});
            assert.deepEqual(calculateHanoi(825, 37723265), {turns: 2.2374143686308563e+248, seconds: 2.1352053506161472e+244});
            assert.deepEqual(calculateHanoi(416, 78115538), {turns: 1.6923032801030364e+125, seconds: 7.799078089138848e+120});
            assert.deepEqual(calculateHanoi(115, 39194336), {turns: 4.153837486827862e+34, seconds: 3.815299984309035e+30});
            assert.deepEqual(calculateHanoi(936, 22548592), {turns: 5.80865979874134e+281, seconds: 9.273827507929907e+277});
        });
    });
});