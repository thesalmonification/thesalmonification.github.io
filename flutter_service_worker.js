'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "13228c14dcbbf8156679d03de02fb1a9",
"version.json": "53a644cbc94031fc3d274dccf2d48340",
"assets/images/frozenCT/frozenCT1001.jpg": "fc34a53324f3d89f8688755ec2f755bb",
"assets/images/frozenCT/frozenCT1002.jpg": "fc34a53324f3d89f8688755ec2f755bb",
"assets/images/frozenCT/frozenCT1003.jpg": "fc34a53324f3d89f8688755ec2f755bb",
"assets/images/frozenCT/frozenCT1004.jpg": "1e3e9c9b9a667df8e7724c6a92436f04",
"assets/images/frozenCT/frozenCT1005.jpg": "338b54b222acef582386634dce2ffbbc",
"assets/images/frozenCT/frozenCT1006.jpg": "888367bc5af77159ea266e61a36419d8",
"assets/images/frozenCT/frozenCT1007.jpg": "09ba759a873328a5f1ac9cca402714b7",
"assets/images/frozenCT/frozenCT1008.jpg": "e33d4fb76926274ba5444e739eeec870",
"assets/images/frozenCT/frozenCT1009.jpg": "03d41722adc667b6b637dd05c3594ce7",
"assets/images/frozenCT/frozenCT1011.jpg": "612318609d46969ead9fca543ef28554",
"assets/images/frozenCT/frozenCT1010.jpg": "4dd853100e436845d4966b6494109122",
"assets/images/frozenCT/frozenCT1012.jpg": "6cbc8b8d560121614bb09e4e0dd1d259",
"assets/images/frozenCT/frozenCT1013.jpg": "3dfc1df61bd73667cc690a24aed5efc6",
"assets/images/frozenCT/frozenCT1014.jpg": "00675b7379bcc44e4b1bede5051b7184",
"assets/images/frozenCT/frozenCT1015.jpg": "bdf04b17239e6a273d7bb24f7407a11c",
"assets/images/frozenCT/frozenCT1016.jpg": "c148b16116186c8442d9d5225760bf0d",
"assets/images/frozenCT/frozenCT1017.jpg": "3c0fe45931903d8ccaf1703f299e85ad",
"assets/images/frozenCT/frozenCT1018.jpg": "f8320bd21f2b9458ecada858dca18d94",
"assets/images/frozenCT/frozenCT1020.jpg": "ebefd721bf9c409724611d4cacf331a6",
"assets/images/frozenCT/frozenCT1019.jpg": "cb56c1f37fee528f1cb4e85b1dc6d76a",
"assets/images/frozenCT/frozenCT1021.jpg": "d8499a57dcce0531f7d37e6de812eef7",
"assets/images/frozenCT/frozenCT1022.jpg": "6ef6a433a09a3708552c9869b209d16b",
"assets/images/frozenCT/frozenCT1023.jpg": "cc9211eed044f0288e3cdca6ac66f008",
"assets/images/frozenCT/frozenCT1024.jpg": "4f0931bbd710b2d6a07811262c5f852a",
"assets/images/frozenCT/frozenCT1025.jpg": "c5aa3af1aa60f179145c4fca3cf5d2ab",
"assets/images/frozenCT/frozenCT1026.jpg": "d5ec8939ddf5ea8ae08778a0b64eb7d9",
"assets/images/frozenCT/frozenCT1027.jpg": "7f3792cbbb6f180405cff61dd199b35c",
"assets/images/frozenCT/frozenCT1028.jpg": "63c90b24cf287a1c397c5ebf296460b9",
"assets/images/frozenCT/frozenCT1030.jpg": "b34a3de8b7e0ba3022add0e115624ca2",
"assets/images/frozenCT/frozenCT1029.jpg": "6456a60f1a5c6e680e7594af0c305aff",
"assets/images/frozenCT/frozenCT1031.jpg": "7d135d1cc5c74fb62906d8958e1ca306",
"assets/images/frozenCT/frozenCT1032.jpg": "413b31fcb836dfe9f43a6bec77b63160",
"assets/images/frozenCT/frozenCT1033.jpg": "1af611cdf7e14d85e0c5442486de52f2",
"assets/images/frozenCT/frozenCT1034.jpg": "7795b84aef44ef5549e76fb944d5ddec",
"assets/images/frozenCT/frozenCT1035.jpg": "adcf9c8bab4a7fb7efe25c646c2b6c64",
"assets/images/frozenCT/frozenCT1036.jpg": "f5f4d5bcc60167c5c3cb8f98cd9cdecb",
"assets/images/frozenCT/frozenCT1037.jpg": "36047a932af7de7a62b55ff71c7b75fc",
"assets/images/frozenCT/frozenCT1038.jpg": "ad9928c33fec754d04c681e993dd9a9a",
"assets/images/frozenCT/frozenCT1039.jpg": "40d00ff074b6b3739486b1f277c31c6a",
"assets/images/frozenCT/frozenCT1040.jpg": "064892ad9d25381f9c77bf11e968e9ae",
"assets/images/frozenCT/frozenCT1041.jpg": "33b73355e6b3169d6b997baaeaacb44e",
"assets/images/frozenCT/frozenCT1042.jpg": "b5f13bf331a54d2d62efdec1dbaf65f6",
"assets/images/frozenCT/frozenCT1043.jpg": "e5b24545e4be9dd7dcee0387d07ae519",
"assets/images/frozenCT/frozenCT1044.jpg": "a38bacc9a4ccb435a32b6e7bebf5de42",
"assets/images/frozenCT/frozenCT1045.jpg": "0bb980b24ee945ec1535b96722b6cd08",
"assets/images/frozenCT/frozenCT1046.jpg": "fb320facd9c060048daa54387790eddf",
"assets/images/frozenCT/frozenCT1047.jpg": "049fe267af2a706342555ce781a4db53",
"assets/images/frozenCT/frozenCT1048.jpg": "2e2f637c9a1265908d1e0e3dd7236640",
"assets/images/frozenCT/frozenCT1049.jpg": "ead46f9c03bacacc5035d4c5e1ab6ac1",
"assets/images/frozenCT/frozenCT1050.jpg": "03cf6f2b4ecc93f67ea852efe2450ee6",
"assets/images/frozenCT/frozenCT1051.jpg": "0cfa5d38cf0a0c08ade08b687487929d",
"assets/images/frozenCT/frozenCT1053.jpg": "5689a453ad40d70112b14be603643f79",
"assets/images/frozenCT/frozenCT1052.jpg": "5dd27192874df6c0135885eb7ea0d11c",
"assets/images/frozenCT/frozenCT1054.jpg": "314ca929eeef1e2f121b75f7beef5347",
"assets/images/frozenCT/frozenCT1055.jpg": "81d478dd704cb373ae392de17e6afa27",
"assets/images/frozenCT/frozenCT1056.jpg": "b3251929d1d1ee7272a36dc3ce7ba12f",
"assets/images/frozenCT/frozenCT1057.jpg": "ba64897fada20435ae7d0237e1da6568",
"assets/images/frozenCT/frozenCT1058.jpg": "0bca3182645396f67ec6189a0d5e6724",
"assets/images/frozenCT/frozenCT1059.jpg": "692d58d78dad6fc343b9b4145df1faa9",
"assets/images/frozenCT/frozenCT1060.jpg": "658d948df12b727df9880dd59b7e5b9f",
"assets/images/frozenCT/frozenCT1061.jpg": "55a6ffe3c82404937477e1d93ea325a0",
"assets/images/frozenCT/frozenCT1062.jpg": "fe8c846a2d93d5e2e3fa832ee8b9249f",
"assets/images/frozenCT/frozenCT1063.jpg": "704204207d4ca02127cb48691e32e751",
"assets/images/frozenCT/frozenCT1064.jpg": "86473508e8d962a47aac184360ce1ebb",
"assets/images/frozenCT/frozenCT1065.jpg": "756e82799acb51dccb414b9b2b9a5886",
"assets/images/frozenCT/frozenCT1066.jpg": "747cc0f552a1d91843aaf31c887c5cfd",
"assets/images/frozenCT/frozenCT1067.jpg": "150d26ff597a7d35b563955090686cb6",
"assets/images/frozenCT/frozenCT1068.jpg": "4e8e89649ee7f0f48a5622e608b8e9dd",
"assets/images/frozenCT/frozenCT1069.jpg": "fd52e5e87b6991b75cf52eb9ee0a206e",
"assets/images/frozenCT/frozenCT1070.jpg": "10eaba7f669514e8ee456e8865efef48",
"assets/images/frozenCT/frozenCT1071.jpg": "43552eb1c2168d969d17fd82ddd2bee1",
"assets/images/frozenCT/frozenCT1072.jpg": "cff35bc88ad893520141ff746b2d5e49",
"assets/images/frozenCT/frozenCT1073.jpg": "7223a1bcbd6c1a3a18598cebae59621a",
"assets/images/frozenCT/frozenCT1074.jpg": "171238d97496f720d178a777f3745b03",
"assets/images/frozenCT/frozenCT1075.jpg": "9e0b31d49e5de389da55e2d22126834a",
"assets/images/frozenCT/frozenCT1076.jpg": "6ba3d8a6986f7d8dd7252553e8171e7e",
"assets/images/frozenCT/frozenCT1077.jpg": "fa4a8b72f25169506552860d2da5c0db",
"assets/images/frozenCT/frozenCT1078.jpg": "aa207dfa0c3bbc105904608c0faf7b04",
"assets/images/frozenCT/frozenCT1079.jpg": "d02691bc461bc038e0816218c8f91114",
"assets/images/frozenCT/frozenCT1080.jpg": "ef8fcd1f58aaf7228188e5405a7c1e35",
"assets/images/frozenCT/frozenCT1081.jpg": "1baf09d87b63cc278df48897d23ddf96",
"assets/images/frozenCT/frozenCT1082.jpg": "d187813e569b97a7866226c38fc9950c",
"assets/images/frozenCT/frozenCT1083.jpg": "92ccffe0235e8ad90ff57f76bfb59bd1",
"assets/images/frozenCT/frozenCT1084.jpg": "43d919aa718c837490102dc96c779747",
"assets/images/frozenCT/frozenCT1085.jpg": "a7e97efeabed583e053ef2dd98ca0be9",
"assets/images/frozenCT/frozenCT1086.jpg": "9ef7a29ea8f91e3ea347987f031f1a17",
"assets/images/frozenCT/frozenCT1087.jpg": "9dbcb1381fa527d75fab2f0e17373b40",
"assets/images/frozenCT/frozenCT1088.jpg": "5d469797ad23a9f49c5740500f5407fa",
"assets/images/frozenCT/frozenCT1089.jpg": "462b4981bf4656d2972396bab6916d42",
"assets/images/frozenCT/frozenCT1090.jpg": "cc573567cbc2f52e690f143a524fa68f",
"assets/images/frozenCT/frozenCT1091.jpg": "69fd4430bb5bd911bc4e05af7770e348",
"assets/images/frozenCT/frozenCT1092.jpg": "0aa9bd6f4145e6be1cbe1c338375954c",
"assets/images/frozenCT/frozenCT1093.jpg": "518f938a7b3233dbadde11dd674b13c4",
"assets/images/frozenCT/frozenCT1094.jpg": "7143e2d62b9207e8f5f73ba5ad1b0ec1",
"assets/images/frozenCT/frozenCT1095.jpg": "051093f2c191cd55bf29e1c0c4c34f5a",
"assets/images/frozenCT/frozenCT1096.jpg": "085a8ed0da314ec8a7204b7db2b2d3de",
"assets/images/frozenCT/frozenCT1097.jpg": "f30a84ca4f84ad7c86863185d8f77fee",
"assets/images/frozenCT/frozenCT1098.jpg": "e5a1f789ced660456cab3fe6a6196ba7",
"assets/images/frozenCT/frozenCT1099.jpg": "a14b160c380678e7cbf91e52daabbae3",
"assets/images/frozenCT/frozenCT1100.jpg": "d0168f45343e874c003e58e4de35822e",
"assets/images/frozenCT/frozenCT1101.jpg": "6c24b5ee0fb8446935d7e86dfdb3098c",
"assets/images/frozenCT/frozenCT1102.jpg": "49e288be8b533a94260c43b46caa3320",
"assets/images/frozenCT/frozenCT1103.jpg": "e162647fe93854a5428de401ba70d912",
"assets/images/frozenCT/frozenCT1104.jpg": "6be4db9432bb012107ed6722ea67786d",
"assets/images/frozenCT/frozenCT1105.jpg": "18064a1106dbf51914c97bd487ec652d",
"assets/images/frozenCT/frozenCT1106.jpg": "139ab01f9283a794d67228ec9f3082d8",
"assets/images/frozenCT/frozenCT1107.jpg": "d13af8484d5643f42fc1192d551432f9",
"assets/images/frozenCT/frozenCT1108.jpg": "ac996f3c96ea40326471cad34bc618d7",
"assets/images/frozenCT/frozenCT1109.jpg": "ad5c8fb3b53bed3c5845ddef9e5f45fd",
"assets/images/frozenCT/frozenCT1110.jpg": "54b884796b78c8519431cd9d5ac68080",
"assets/images/frozenCT/frozenCT1111.jpg": "a4700a025c44827a2b2cbc849191e5cb",
"assets/images/frozenCT/frozenCT1112.jpg": "bf626358ac0e6df3863a7b8f8c973b89",
"assets/images/frozenCT/frozenCT1113.jpg": "bb343928fd73829c3463bddcd1e9ca92",
"assets/images/frozenCT/frozenCT1114.jpg": "3b8887de75958e64dd7d6dca408034ba",
"assets/images/frozenCT/frozenCT1115.jpg": "b72bdceb36de6c6e1e79a82e63a86517",
"assets/images/frozenCT/frozenCT1116.jpg": "01b0969d9b25ad3ea2c5255857548676",
"assets/images/frozenCT/frozenCT1117.jpg": "cb314dda7afd2ccdd447c9bd6354e79e",
"assets/images/frozenCT/frozenCT1118.jpg": "d0dab67a15c08477b8bf631ca907f436",
"assets/images/frozenCT/frozenCT1119.jpg": "aa3554fe9f6364a1bc42d67e78cbd1a0",
"assets/images/frozenCT/frozenCT1120.jpg": "e39d9e46ed11f0591131008ca68d1ccb",
"assets/images/frozenCT/frozenCT1121.jpg": "bf8a89c6b431a1392dc577244e3f9397",
"assets/images/frozenCT/frozenCT1122.jpg": "3d5d4a4117b7545e34554278c242bd69",
"assets/images/frozenCT/frozenCT1123.jpg": "1969a0aad5a76801bfc9e9b4be8405c9",
"assets/images/frozenCT/frozenCT1124.jpg": "4886ed6ebb3371aa3418d973af0d905b",
"assets/images/frozenCT/frozenCT1125.jpg": "00e3d3d43b10e4901b07805b8b22a5c7",
"assets/images/frozenCT/frozenCT1126.jpg": "635238bd1c5ca15e04881e62c35cb05f",
"assets/images/frozenCT/frozenCT1127.jpg": "4eec45161f2fa24b8f06bd27e2558ac3",
"assets/images/frozenCT/frozenCT1128.jpg": "c2b17544bc3ae15b4a1767b6f6d327e3",
"assets/images/frozenCT/frozenCT1129.jpg": "3534189980db3b0df755d9a98721ac99",
"assets/images/frozenCT/frozenCT1130.jpg": "0feabfc3d9b256873b8ef8ca35696f56",
"assets/images/frozenCT/frozenCT1131.jpg": "3b276df47a3a3cdad5090f646b75045c",
"assets/images/frozenCT/frozenCT1132.jpg": "0391562e560399d7a3441f1d05adc647",
"assets/images/frozenCT/frozenCT1133.jpg": "435b5e7e90619714b7899d8df17cc4ef",
"assets/images/frozenCT/frozenCT1134.jpg": "6b2a45ebfcac523062aedc05b0a8640e",
"assets/images/frozenCT/frozenCT1135.jpg": "1035c16c9f5934eed9fcaab489ac0dd6",
"assets/images/frozenCT/frozenCT1136.jpg": "ea42dc4fc9a1a6ec58490cfd9af5d8df",
"assets/images/frozenCT/frozenCT1137.jpg": "e97110fee251cff5a332dfbaa0d2b591",
"assets/images/frozenCT/frozenCT1138.jpg": "043b4fee7a9ef3f22d51a8e3fd965667",
"assets/images/frozenCT/frozenCT1139.jpg": "3abc347858f19a34f10c73933e86d44c",
"assets/images/frozenCT/frozenCT1140.jpg": "c19b919734b6996d9e6f0d65bf340d67",
"assets/images/frozenCT/frozenCT1141.jpg": "2508657702331794233f76e92b4e54f9",
"assets/images/frozenCT/frozenCT1142.jpg": "4e8cb4722aa2f23981c45d5191e86cda",
"assets/images/frozenCT/frozenCT1143.jpg": "c0e5b3839131f9d1a9b489d637e5bbb8",
"assets/images/frozenCT/frozenCT1144.jpg": "0b49bab258f01ea05fcd44523e80a347",
"assets/images/frozenCT/frozenCT1145.jpg": "007f87dac52e4c16f2312200ac7d9e66",
"assets/images/frozenCT/frozenCT1146.jpg": "c2ec5cbe0e5f2fc4ce6be6f69c24a0bf",
"assets/images/frozenCT/frozenCT1147.jpg": "18a19adc28146ed5bccc97c81a75eacf",
"assets/images/frozenCT/frozenCT1148.jpg": "046eb3db23e4cf5a7ff16a3a4cc31d00",
"assets/images/frozenCT/frozenCT1149.jpg": "ef778615869864f5deda7844fae9041c",
"assets/images/frozenCT/frozenCT1150.jpg": "5f5e7d5a2a81ffbb122552f23c8422c9",
"assets/images/frozenCT/frozenCT1151.jpg": "1daa5541b73c60ae012b550ea57255ad",
"assets/images/frozenCT/frozenCT1152.jpg": "e1e6fd5946c106733ddc60f8f606e37f",
"assets/images/frozenCT/frozenCT1153.jpg": "965c5c7bf690e858d87f3dab6519061e",
"assets/images/frozenCT/frozenCT1154.jpg": "754c3b98f5a8528704d09f665da01a0d",
"assets/images/frozenCT/frozenCT1155.jpg": "0d52b79d4133cbf3d372b8f71ff524b4",
"assets/images/frozenCT/frozenCT1156.jpg": "34d1a1a683d2d7ec62e84431f38e9972",
"assets/images/frozenCT/frozenCT1157.jpg": "fe0bc95b369da1aa411d13daaeac28c0",
"assets/images/frozenCT/frozenCT1158.jpg": "eb081935b6c697155a719072fc45ea89",
"assets/images/frozenCT/frozenCT1159.jpg": "4dcbfe769cddfd09332b8dcf02faa88c",
"assets/images/frozenCT/frozenCT1160.jpg": "42ecdfbd1b9d5e26bc684d8e8271ddaf",
"assets/images/frozenCT/frozenCT1161.jpg": "ab77530bbf09620b96cea25d78af32a4",
"assets/images/frozenCT/frozenCT1162.jpg": "31568a381ea46438fa786a7bc4b7cb28",
"assets/images/frozenCT/frozenCT1163.jpg": "a1a715135f54ec18da5416c035d2c814",
"assets/images/frozenCT/frozenCT1164.jpg": "9693f8e1741afde03cc31267cd363a6c",
"assets/images/frozenCT/frozenCT1165.jpg": "d86e9ee9212b0880add4924715dcd8e1",
"assets/images/frozenCT/frozenCT1166.jpg": "46c6ac2289f6a1fddb8ac7f4d7dae804",
"assets/images/frozenCT/frozenCT1167.jpg": "dbc77187db2f6ec3db3f4872686a18e6",
"assets/images/frozenCT/frozenCT1168.jpg": "3ca4534d6b0ab73e0a896c08e3b18c3c",
"assets/images/frozenCT/frozenCT1169.jpg": "6323c963f39d13410169017988a03791",
"assets/images/frozenCT/frozenCT1170.jpg": "81f6f372155d528e397722c1441b2aeb",
"assets/images/frozenCT/frozenCT1171.jpg": "c8ba66ad027597c5baec42ba8dae3b0d",
"assets/images/frozenCT/frozenCT1172.jpg": "d1aeb8686f46af8511455731666a408b",
"assets/images/frozenCT/frozenCT1173.jpg": "5b46c2db5c0b4cfe4e32789fdc1565e1",
"assets/images/frozenCT/frozenCT1174.jpg": "f7bb8c39a11f6a4ceedfd0fce5669ffd",
"assets/images/frozenCT/frozenCT1175.jpg": "19195f489ff28c65c42ea2d939b3f81c",
"assets/images/frozenCT/frozenCT1176.jpg": "b0f8d038aee0a23ee984c5d0adf5487f",
"assets/images/frozenCT/frozenCT1177.jpg": "2cb4405486ae4ab07e8ca91568c07a70",
"assets/images/frozenCT/frozenCT1178.jpg": "18de591fab060ca07c323ffdb6ce68ef",
"assets/images/frozenCT/frozenCT1179.jpg": "111ceef4648a8ad63b0487e275b709ef",
"assets/images/frozenCT/frozenCT1180.jpg": "92146f955df7406863b87b9b80df4ec5",
"assets/images/frozenCT/frozenCT1181.jpg": "8e9ee5c8972ed60c2c4c7bf8676699a7",
"assets/images/frozenCT/frozenCT1182.jpg": "86a69be2f4a4e56ea137d2a662151d55",
"assets/images/frozenCT/frozenCT1183.jpg": "22875d5446f32984f32e3088b2fb6fea",
"assets/images/frozenCT/frozenCT1184.jpg": "6127426b3e32a44dea328fcce9765530",
"assets/images/frozenCT/frozenCT1185.jpg": "9e0d9dc75732439b724cc0418fd6ed8b",
"assets/images/frozenCT/frozenCT1186.jpg": "82a9547ad676e2edc410aa65c7515b92",
"assets/images/frozenCT/frozenCT1187.jpg": "c14fb811308e988428c465b609fcd420",
"assets/images/frozenCT/frozenCT1188.jpg": "9c6098dba10cb327a3e9d8c66b484363",
"assets/images/frozenCT/frozenCT1189.jpg": "cdc640b8dfad0868feae7d14752694d0",
"assets/images/frozenCT/frozenCT1190.jpg": "60ce48da15249e359264fc8629449b80",
"assets/images/frozenCT/frozenCT1191.jpg": "496ccfe2c64729ff8a29109e267b1768",
"assets/images/frozenCT/frozenCT1192.jpg": "ffe0e5ea9bfb6a838ea9adc4169b2ad8",
"assets/images/frozenCT/frozenCT1193.jpg": "50c985ac700b623075674b19b938db04",
"assets/images/frozenCT/frozenCT1194.jpg": "6f6114c57885333aa5f541608630ff65",
"assets/images/frozenCT/frozenCT1195.jpg": "50eaebc8652bd4a2e20a5bba59f0c702",
"assets/images/frozenCT/frozenCT1196.jpg": "4ba65bf2e3c9ac60064ac805ac7592ba",
"assets/images/frozenCT/frozenCT1197.jpg": "37815c358474256a4c01ff1e0d8fa757",
"assets/images/frozenCT/frozenCT1198.jpg": "20e1df8f43883ca1da932beedb50f436",
"assets/images/frozenCT/frozenCT1199.jpg": "2b508051415c5f0e0ccef111f3441bb2",
"assets/images/frozenCT/frozenCT1200.jpg": "163ad3cf6f5c3d7fcf42c571a0f8f773",
"assets/images/frozenCT/frozenCT1201.jpg": "248799fcd072bd533acca5dd1ccec2bf",
"assets/images/frozenCT/frozenCT1202.jpg": "3b33cd33d99c5eb3d3b0fc8bc56f636d",
"assets/images/frozenCT/frozenCT1203.jpg": "f444e9712895530cd8e6ad45516d2e0f",
"assets/images/frozenCT/frozenCT1204.jpg": "976a38e3afc071fe7e5f680caa0ec97c",
"assets/images/frozenCT/frozenCT1205.jpg": "6dc7c083389b2be0ea74e962925f503b",
"assets/images/frozenCT/frozenCT1206.jpg": "3ee84a12303d955b32b06e58b2b22100",
"assets/images/frozenCT/frozenCT1207.jpg": "2fbaea1e1d33fa4ad2a0d84bbfc47285",
"assets/images/frozenCT/frozenCT1208.jpg": "a42a650849f9bb9e83ad7154df833edd",
"assets/images/frozenCT/frozenCT1209.jpg": "3d4c12ece90cad5a6a556c3467d27ed6",
"assets/images/frozenCT/frozenCT1210.jpg": "01ba2f9dd5d57487b7880c6f03a6f75f",
"assets/images/frozenCT/frozenCT1211.jpg": "1d736aeedc65c091624eb46242ddf078",
"assets/images/frozenCT/frozenCT1212.jpg": "8c1c98596bd17d86312d1ea760505d70",
"assets/images/frozenCT/frozenCT1213.jpg": "1c3dcad3c1faa1a1671b1a6c1490a224",
"assets/images/frozenCT/frozenCT1214.jpg": "3559cadfc37eb1abf0750cad7e721a7e",
"assets/images/frozenCT/frozenCT1215.jpg": "101ca7e3ae4664ea2fdea97fb7908fad",
"assets/images/frozenCT/frozenCT1216.jpg": "97b3b2bb6e7aa71a568cebcdc4081012",
"assets/images/frozenCT/frozenCT1217.jpg": "3d9d55037961858312123360c593a0fd",
"assets/images/frozenCT/frozenCT1218.jpg": "7538e298b7ab4eeaba86f786c57af14c",
"assets/images/frozenCT/frozenCT1219.jpg": "40f8ca552b8103ab40cfe71830af3496",
"assets/images/frozenCT/frozenCT1220.jpg": "9b7850cfce1eafad2d75f74f80462bcd",
"assets/images/frozenCT/frozenCT1221.jpg": "061da48950eb50dc1917ea4c5bb700c5",
"assets/images/frozenCT/frozenCT1222.jpg": "b8f31988945d1888052cc16aac7754ae",
"assets/images/frozenCT/frozenCT1223.jpg": "4d7ad3aec4c45e121c845ea1099ad288",
"assets/images/frozenCT/frozenCT1224.jpg": "a38de9832ea3cb61b24f385ad78e17df",
"assets/images/frozenCT/frozenCT1225.jpg": "cdd4d00ede14e22fee9afef4b35dece5",
"assets/images/frozenCT/frozenCT1226.jpg": "05b9fadbb5c7702a534a06ff523da451",
"assets/images/frozenCT/frozenCT1227.jpg": "d428f162f226220bae0f05a4581bacac",
"assets/images/frozenCT/frozenCT1228.jpg": "abe7e76e74dc093cb6bd384583bf7f1a",
"assets/images/frozenCT/frozenCT1229.jpg": "b9e1622574e0bdf007525d029b096603",
"assets/images/frozenCT/frozenCT1230.jpg": "037a7e56e4fcd46faa35eff18f7b0b1a",
"assets/images/frozenCT/frozenCT1231.jpg": "d5580ede09187e023012720dad2a8940",
"assets/images/frozenCT/frozenCT1232.jpg": "462c2a48335c392529c79b316a6c3ff8",
"assets/images/frozenCT/frozenCT1233.jpg": "c3dbd74fe1a03c00ed644d3a8a5f92b7",
"assets/images/frozenCT/frozenCT1234.jpg": "20038880da35d05d351b1f4aa68d2ee9",
"assets/images/frozenCT/frozenCT1235.jpg": "cb09af2392a165ed505217b1ad48fbc6",
"assets/images/frozenCT/frozenCT1236.jpg": "16718d14bde921628f12e2e24f659c25",
"assets/images/frozenCT/frozenCT1237.jpg": "5619680c317347f5ce6b9c1648e987a5",
"assets/images/frozenCT/frozenCT1238.jpg": "d3e042df842b8660abd939ddb278d187",
"assets/images/frozenCT/frozenCT1239.jpg": "70127747428c3b00b3d33f8c05969c21",
"assets/images/frozenCT/frozenCT1240.jpg": "9bfc2a02eeb64f32d545dcef9a0a39e9",
"assets/images/frozenCT/frozenCT1241.jpg": "cffa13de3b9d4150bf071a99a66658f7",
"assets/images/frozenCT/frozenCT1242.jpg": "ef22612b1f69b973d6a49d14ef0fec78",
"assets/images/frozenCT/frozenCT1243.jpg": "4df566474b7d14c4aeca718ea0d2787c",
"assets/images/frozenCT/frozenCT1244.jpg": "cbc6ef60c8a982b4d8ef39e31386a7a7",
"assets/images/frozenCT/frozenCT1245.jpg": "e74bf9676ec1ab5b16e107f4ed23e0f4",
"assets/images/frozenCT/frozenCT1246.jpg": "9ba701770f1004e6c3ea2785502cef29",
"assets/images/frozenCT/frozenCT1247.jpg": "80b1ed721b86cf781ee95d4a95d04727",
"assets/images/frozenCT/frozenCT1248.jpg": "434d5ca170aac57337f2aec299c1cd1e",
"assets/images/frozenCT/frozenCT1249.jpg": "829aebccf65634ec944ebb9d415e1d18",
"assets/images/frozenCT/frozenCT1250.jpg": "2037f2e04febda0c71d50d7d00dd75c0",
"assets/images/frozenCT/frozenCT1251.jpg": "fa09523fd26bef6443de29e03edf7abd",
"assets/images/frozenCT/frozenCT1252.jpg": "c3d31a5eb92128ea5d56b3fa26560c86",
"assets/images/frozenCT/frozenCT1253.jpg": "8237fc1a340bcdc1c8a2b2542e098a0d",
"assets/images/frozenCT/frozenCT1254.jpg": "0fc66e299cddb3bb70fb0c1224a815bd",
"assets/images/frozenCT/frozenCT1255.jpg": "254cc6b8defb8cf9234aad35801d2c05",
"assets/images/HeadAxial/image_00030.png": "284a0594be77b1a31a7ebf1287ad50f0",
"assets/images/HeadAxial/image_00029.png": "28fb336ccefe0a7e48772ee697825ecc",
"assets/images/HeadAxial/image_00028.png": "6bab275addda0b507814e23aaf3f4096",
"assets/images/HeadAxial/image_00027.png": "b072f98a0d7a2f9dd45a2fb4f01f326a",
"assets/images/HeadAxial/image_00026.png": "21ca88633e54f5fa05a5543760cd04f9",
"assets/images/HeadAxial/image_00025.png": "9152da6fdb6da5390f88a16f278efb85",
"assets/images/HeadAxial/image_00024.png": "1001327510a048722ec34d7fbee21a21",
"assets/images/HeadAxial/image_00023.png": "75b18a1e4a6e68d63b8cfb79aa232453",
"assets/images/HeadAxial/image_00022.png": "ab1dfeb3cfa65cb8b2658efc1f2e4919",
"assets/images/HeadAxial/image_00021.png": "f241197586d22e5c4a9b5f97b879f617",
"assets/images/HeadAxial/image_00020.png": "06b06813ac2cbda92cc6e0e5c2f5fd6c",
"assets/images/HeadAxial/image_00019.png": "188e8bf77620d21656b4880d33e7f47f",
"assets/images/HeadAxial/image_00018.png": "dbce4225edbaa168160f6450caf6452d",
"assets/images/HeadAxial/image_00017.png": "cd9394d4312d6a15395d86990568a481",
"assets/images/HeadAxial/image_00016.png": "d067f14db7758a6b7f84cc554e6ac478",
"assets/images/HeadAxial/image_00015.png": "c9dc2de4b5d9a575777343fa199edbf7",
"assets/images/HeadAxial/image_00014.png": "1795bd9e233f958cb3d785b3986f22e4",
"assets/images/HeadAxial/image_00013.png": "36c899979875d8535202cce243f5b87f",
"assets/images/HeadAxial/image_00012.png": "a16af0d7aa50103ae019af381ddcc90f",
"assets/images/HeadAxial/image_00011.png": "c95670d9e3a98cbf1336e94cab5b15cf",
"assets/images/HeadAxial/image_00010.png": "6a03de792a79edcc35bd97de85de4d7f",
"assets/images/HeadAxial/image_00009.png": "91d41f0878cae28477614ac42e3d45b1",
"assets/images/HeadAxial/image_00008.png": "d17a589beed5e183b82fa9956277295e",
"assets/images/HeadAxial/image_00007.png": "7d5ec9f89a8c01fb37425a4e0f92f817",
"assets/images/HeadAxial/image_00006.png": "d05101b61ab75edb1575b0112e6af041",
"assets/images/HeadAxial/image_00005.png": "066b5da90709cce64c6e14befda2d3b0",
"assets/images/HeadAxial/image_00004.png": "5f85976c725cc110db1535e5f41cb272",
"assets/images/HeadAxial/image_00003.png": "a2abf426d69f3d2926dbcd9a3af0c9b2",
"assets/images/HeadAxial/image_00002.png": "00708ea1a83ab2e0f03277b3dc7e9fe7",
"assets/images/HeadAxial/image_00001.png": "4ed0dcdaf04f1bdf76e19fb75ef0b3de",
"assets/images/HeadAxial/image_00000.png": "0bb99ec34b30bd4696383c25016b7bd1",
"assets/images/HeadSaggital/image_00030.png": "284a0594be77b1a31a7ebf1287ad50f0",
"assets/images/HeadSaggital/image_00029.png": "284a0594be77b1a31a7ebf1287ad50f0",
"assets/images/HeadSaggital/image_00028.png": "284a0594be77b1a31a7ebf1287ad50f0",
"assets/images/HeadSaggital/image_00027.png": "ce306c5b68ce16407832c26510c80399",
"assets/images/HeadSaggital/image_00026.png": "1e09c81529609bb63baf7196629445d6",
"assets/images/HeadSaggital/image_00025.png": "bf9a9fbc4f79c983cf2b4e68989ccd19",
"assets/images/HeadSaggital/image_00024.png": "ad39b4951f5048b6bd6766d56bf1ea10",
"assets/images/HeadSaggital/image_00023.png": "3b2dd6049e1f69a36cc9e49f3ebd1145",
"assets/images/HeadSaggital/image_00022.png": "701c70a95bd57e482eb3a27ffe3e639f",
"assets/images/HeadSaggital/image_00021.png": "8380ae7a35c8cfa979e340c0bbbc5bcf",
"assets/images/HeadSaggital/image_00020.png": "00402b04013453922358d0c568dc0276",
"assets/images/HeadSaggital/image_00019.png": "00bf55a07768882f146d5da5602d9ee7",
"assets/images/HeadSaggital/image_00018.png": "4b6925defb9bf779c83b9fc1d24d6f94",
"assets/images/HeadSaggital/image_00017.png": "41c45593f5c7b39a1a8084c3d4d7cb2c",
"assets/images/HeadSaggital/image_00016.png": "b41097f79e6767d7abc5b09624f17093",
"assets/images/HeadSaggital/image_00015.png": "a84b6a91aa36f0ffe06fc0075913c730",
"assets/images/HeadSaggital/image_00014.png": "7e94803e6b54ae12c8551648094b49fe",
"assets/images/HeadSaggital/image_00013.png": "819c3cae578df548043dc27d77f24bc4",
"assets/images/HeadSaggital/image_00012.png": "232738fd28bc4b03dd47d99caa3c75c4",
"assets/images/HeadSaggital/image_00011.png": "a93f7d4efeed88f090c529be692a9a3c",
"assets/images/HeadSaggital/image_00010.png": "6dfd91902e6d014f298d2bf9953219d2",
"assets/images/HeadSaggital/image_00009.png": "b2367269a22e33e68c73c56cca250bb2",
"assets/images/HeadSaggital/image_00008.png": "0d5f4871f95e3f72edec984b26592a03",
"assets/images/HeadSaggital/image_00007.png": "316979cb7637a0aa83021b3844084b60",
"assets/images/HeadSaggital/image_00006.png": "3ed32052c34b3282b0ae26ec391299c0",
"assets/images/HeadSaggital/image_00005.png": "26c10bace84c8ac015414f614ecc8cb1",
"assets/images/HeadSaggital/image_00004.png": "ea88efcccd36d5ca0f931130784763ac",
"assets/images/HeadSaggital/image_00003.png": "284a0594be77b1a31a7ebf1287ad50f0",
"assets/images/HeadSaggital/image_00002.png": "284a0594be77b1a31a7ebf1287ad50f0",
"assets/images/HeadSaggital/image_00001.png": "284a0594be77b1a31a7ebf1287ad50f0",
"assets/images/HeadSaggital/image_00000.png": "284a0594be77b1a31a7ebf1287ad50f0",
"assets/images/HeadCoronal/image_00030.png": "640deef39acabbdb913c213710476a1a",
"assets/images/HeadCoronal/image_00029.png": "bd1f9ace61b00b953c88ffae07424b5e",
"assets/images/HeadCoronal/image_00028.png": "a6b4e3ff09fc0d11af84bf6cc02e1978",
"assets/images/HeadCoronal/image_00027.png": "91c1c1b8f667f484d5446b9745696c32",
"assets/images/HeadCoronal/image_00026.png": "0fd976cc70ba356b33d145b7a0c84cdb",
"assets/images/HeadCoronal/image_00025.png": "15f89335a12cfa2086198d93eada653f",
"assets/images/HeadCoronal/image_00024.png": "ecfe9a0061581bba1327e6b9686bfece",
"assets/images/HeadCoronal/image_00023.png": "a2e82e103161155bba5bb3b76fd41ee3",
"assets/images/HeadCoronal/image_00022.png": "c9d7caef91bbb9dd5be1e0c54cb0f937",
"assets/images/HeadCoronal/image_00021.png": "99d26ca3f60a27ef914c4d77ba1e5213",
"assets/images/HeadCoronal/image_00020.png": "f3d825f66861b873b75ac689d26929c3",
"assets/images/HeadCoronal/image_00019.png": "5e7c2350f3ccd2f05fb7003ff27eee58",
"assets/images/HeadCoronal/image_00018.png": "d7c1a0acad35ccd7555af421f6ebf3e8",
"assets/images/HeadCoronal/image_00017.png": "e77f7087ea60c8ab2d2b5712ba6a1b19",
"assets/images/HeadCoronal/image_00016.png": "794addd0f1377f347862168b3cc2d536",
"assets/images/HeadCoronal/image_00015.png": "4a9263bd7ccb8530a0451803edc00910",
"assets/images/HeadCoronal/image_00014.png": "5b265d24fec04d813efa811f7482c069",
"assets/images/HeadCoronal/image_00013.png": "0a2157bfce659a6e79937e465f8962d6",
"assets/images/HeadCoronal/image_00012.png": "0d6ae870cac8242018a772a036dc88ad",
"assets/images/HeadCoronal/image_00011.png": "3657404efe9778cd2456bc1cfc8cccfb",
"assets/images/HeadCoronal/image_00010.png": "1d98c70e280cdbc84a80eb07092bb036",
"assets/images/HeadCoronal/image_00009.png": "af23f902ea925f87c76e63b35069a278",
"assets/images/HeadCoronal/image_00008.png": "52eda4f3159dbc8c9ac03ca509376d44",
"assets/images/HeadCoronal/image_00007.png": "11a4da2635a2fb3320d0968ee8dded39",
"assets/images/HeadCoronal/image_00006.png": "955e523189fa1e4991ab98c606e0a3ac",
"assets/images/HeadCoronal/image_00005.png": "95af832f88bc8952be4d7e2caa0e27d2",
"assets/images/HeadCoronal/image_00004.png": "12058fb865b1e5282a59f4fbe02649ea",
"assets/images/HeadCoronal/image_00003.png": "31c850fb5e7a77483ae0d7bf5629366d",
"assets/images/HeadCoronal/image_00002.png": "d4682454ddb529dc51e73af9b81b255c",
"assets/images/HeadCoronal/image_00001.png": "520e302128a894ab130c7311ed57033a",
"assets/images/HeadCoronal/image_00000.png": "284a0594be77b1a31a7ebf1287ad50f0",
"assets/images/Segmentations/Segmentation.gltf": "c370e306eff683a070c232b5311bf1ce",
"assets/images/Segmentations/skull.obj": "135da2ff8fd992932546c66cfeb48e68",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/shaders/ink_sparkle.frag": "20edec51f1e0ced5ad47d9bee21be84c",
"assets/AssetManifest.json": "c47dd81f3a94dd9da67613362d02cf8d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "de289cbfe3642689dfa9032042c54b1f",
"assets/assets/Segmentations/12140_Skull_v3_L2.mtl": "732256a142f9729b83fecc7d1e4ce747",
"assets/assets/Segmentations/Skull.jpg": "0c01967791f3fbb8d35b77abe937fcff",
"assets/assets/Segmentations/skull.obj": "135da2ff8fd992932546c66cfeb48e68",
"index.html": "27471d6d3619151abf9d678869dc9a68",
"/": "27471d6d3619151abf9d678869dc9a68",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "e27f94ac27df18e882c95a3f5894853b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
