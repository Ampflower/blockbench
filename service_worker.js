if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let f={};const d=e=>i(e,c),n={module:{uri:c},exports:f,require:d};s[c]=Promise.all(a.map((e=>n[e]||d(e)))).then((e=>(r(...e),f)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"blockbench"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"5700d4982ade4662212a074ad054c147"},{url:"favicon.png",revision:"bb17c5c284076fc17e3399860df472d7"},{url:"js/animations/animation_controllers.js",revision:"ec07e5a04aeb3b37fe21ffc4d0fe4ac1"},{url:"js/animations/animation.js",revision:"362d55c35dccc74eab2d83289a9c8840"},{url:"js/animations/keyframe.js",revision:"8eb423716c10e6a2e34a19ce6ab9b181"},{url:"js/animations/molang.js",revision:"15279b2850871a599389ca579cf5f1d8"},{url:"js/animations/timeline_animators.js",revision:"bc97bb110d0c961b73e5af9615d721f0"},{url:"js/animations/timeline.js",revision:"c07b106f8bdd568bff0afe8f219b1ec2"},{url:"js/api.js",revision:"447c6aa1bc970791171c494f73df42ac"},{url:"js/boot_loader.js",revision:"33c51f9cef3f859af9f5a82dc6c4568a"},{url:"js/copy_paste.js",revision:"eeb87dabb13148b488d79faa6009e672"},{url:"js/desktop.js",revision:"9eaab90536f99aba3f7022a8e0321947"},{url:"js/display_mode.js",revision:"ef4c09644bd6e918f1e9455935b897f5"},{url:"js/edit_sessions.js",revision:"b3e920753356bdfcd457d6822808e1e4"},{url:"js/file_system.js",revision:"0611bf6d749455ade1899bc0eb503e83"},{url:"js/globals.js",revision:"442493e3975da7568905d8286a1ce8ba"},{url:"js/interface/about.js",revision:"c74c8ffa22a6b0f8586f58d1cf8e5c10"},{url:"js/interface/action_control.js",revision:"afcaa1d346c0e90d4d612e961495cace"},{url:"js/interface/actions.js",revision:"ad4004dc008ac2963a1359ee606cc3f1"},{url:"js/interface/dialog.js",revision:"daca4603658a94cec49c620f954a8321"},{url:"js/interface/interface.js",revision:"400a3d7022e5aca1626561da45fa2cd0"},{url:"js/interface/keyboard.js",revision:"db4eef05a8b9db2b777d7e47512f5a56"},{url:"js/interface/menu_bar.js",revision:"a4d2e821cf28f763b846d04b9d2c05c0"},{url:"js/interface/menu.js",revision:"f57db50cc29a460c2613b1e731499aaf"},{url:"js/interface/panels.js",revision:"8aacd171b5172fa07475688e0fa14d3c"},{url:"js/interface/settings.js",revision:"6b01a22ac7d0d89bd077647b937e707a"},{url:"js/interface/start_screen.js",revision:"b8dfbfa4a7d1e057c733dca16c6f91c5"},{url:"js/interface/themes.js",revision:"e37f1c69595409c2113d3dc942fe8d82"},{url:"js/interface/vue_components.js",revision:"3e6bcc61fdeaafeb3d25d7614e5ca947"},{url:"js/io/codec.js",revision:"05cf9ad9820e9c78ac46b5853abbd8dc"},{url:"js/io/format.js",revision:"bd1dc1e402d2869099924f1edf845b15"},{url:"js/io/formats/bbmodel.js",revision:"1be58b5d163705bf0a7742d631b741a0"},{url:"js/io/formats/bedrock_old.js",revision:"37d36670ad148d5647a0a44342625601"},{url:"js/io/formats/bedrock.js",revision:"acbcd496c6379ffafac3b4ae79dab60c"},{url:"js/io/formats/collada.js",revision:"c3dc079d0d0965f8e8ec478484bd1485"},{url:"js/io/formats/fbx.js",revision:"2303e6997169fb3d8d9d0a8687a8bc25"},{url:"js/io/formats/generic.js",revision:"7064ced3120d1345c09d9830571bb5e5"},{url:"js/io/formats/gltf.js",revision:"acdd62a106922b9f76ff084cc775e912"},{url:"js/io/formats/image.js",revision:"2ec84f468716649fb7a0cc8f17e933b6"},{url:"js/io/formats/java_block.js",revision:"119df5ca927331964dd6fff94eae5521"},{url:"js/io/formats/modded_entity.js",revision:"ec60fd3d469d5956eb83bd4b9fc844fd"},{url:"js/io/formats/obj.js",revision:"db5bc4b405ad407b6b1fb8ff8c4cb8d3"},{url:"js/io/formats/optifine_jem.js",revision:"551a69bdffecb0edfbbf0f38f5d75dfc"},{url:"js/io/formats/optifine_jpm.js",revision:"7902a08955db9db9df5499c03e71b9a7"},{url:"js/io/formats/skin.js",revision:"9bfc9eef16853d95d4e4525e9e27e2fb"},{url:"js/io/io.js",revision:"3b059998ed0d43590d5e62767d475449"},{url:"js/io/project.js",revision:"c47673099333bcee775bdffb2f3b9733"},{url:"js/misc.js",revision:"ca145a9831fdf51058f01eb0905cb6f2"},{url:"js/modeling/mesh_editing.js",revision:"824ed945222118d3bfcb721a99c8a6ee"},{url:"js/modeling/scale.js",revision:"0d92ef3106d00ec295ed5cab93c9cb6c"},{url:"js/modeling/transform_gizmo.js",revision:"c83b00781931207492b8f790849279a1"},{url:"js/modeling/transform.js",revision:"636d703f76235846de3a232cf8c7d14a"},{url:"js/modes.js",revision:"3dbc200cfec707f686f74ff4039c4188"},{url:"js/outliner/cube.js",revision:"e7fe6bda431bf19dcd8ef4aff3636da2"},{url:"js/outliner/group.js",revision:"a593efdbfe4fc3705d76fbe4486abc31"},{url:"js/outliner/locator.js",revision:"98b3f16ab669a636c4eec7af749374f9"},{url:"js/outliner/mesh.js",revision:"57b9f78182896d3857a6ab38fc89cc50"},{url:"js/outliner/null_object.js",revision:"8c67da9aed4fb92f7456b8a8020894dd"},{url:"js/outliner/outliner.js",revision:"d1eb4de7070b707caf9a24660caa835b"},{url:"js/outliner/texture_mesh.js",revision:"bfe065ed37b1e721e6c4235b2ad56ca8"},{url:"js/plugin_loader.js",revision:"34344c3cfeacdc7c6dc9891bdcf6c6e1"},{url:"js/predicate_editor.js",revision:"68eba7a01e4af212de937f132cb7a61b"},{url:"js/preview/canvas.js",revision:"e693ee272fe9c6bcc4024942a6d3a266"},{url:"js/preview/OrbitControls.js",revision:"bfa2bfd467260743d40098840128b422"},{url:"js/preview/preview_scenes.js",revision:"d769f67f3d495808e053e634803b1eee"},{url:"js/preview/preview.js",revision:"a45a0261a530a640291a5b22d81ff4c6"},{url:"js/preview/screenshot.js",revision:"ca830515f24e724b628cb50e1d8fc223"},{url:"js/property.js",revision:"dd4390b66720181370a3196484652caa"},{url:"js/texturing/color.js",revision:"58f7f759e1d88a57da03809b72c2e4f1"},{url:"js/texturing/edit_texture.js",revision:"56e879423c684932fa54c518938874ae"},{url:"js/texturing/painter.js",revision:"f0f9394a2b9fcd1783f3941c05e5394f"},{url:"js/texturing/texture_generator.js",revision:"d28e4a9596545430d3f17ad3e53381dc"},{url:"js/texturing/textures.js",revision:"cd21b45133c860ebf6454a06e0d62393"},{url:"js/texturing/uv.js",revision:"27025e931a0511c79f98ae366f0b5cd5"},{url:"js/undo.js",revision:"84d9cd0ea81454e60245877c97b2525e"},{url:"js/util.js",revision:"9c7f5f937a4660d79a57f097d769f5cc"},{url:"js/validator.js",revision:"16549cdd3980708c71b930c654521173"},{url:"js/web.js",revision:"1f0065ecf76fba555da85348c33a0da8"},{url:"js/webpack/bundle.js",revision:"35117454009e2a1721ab556a795731a0"},{url:"lib/canvas2apng.js",revision:"4a686e628dca1c535a76fc02f19ee706"},{url:"lib/CanvasFrame.js",revision:"af677de11b513f6c8c8ff96e31e59acd"},{url:"lib/color-picker.min.js",revision:"1725de455ed2f45daafb69dd90413104"},{url:"lib/fik.min.js",revision:"9985a46a1107966f2375d0c61241c689"},{url:"lib/FileSaver.js",revision:"547422b2d7a739f14eefa1fc1c59c658"},{url:"lib/gif.js",revision:"6760f4c06414ceb8b3d30e14d3a59c69"},{url:"lib/gif.worker.js",revision:"d8cc71ca8334b5002e4481497802c2ac"},{url:"lib/GLTFExporter.js",revision:"761d87878a43c46d12376baa31a9cf6f"},{url:"lib/jquery-ui.min.js",revision:"f7275ece7d6dea2aec3c23457415695c"},{url:"lib/jquery.js",revision:"3e4bb227fb55271bfe9c9d4a09147bd8"},{url:"lib/jszip.min.js",revision:"5ab88d8028258f8c1d0ae2ab85d1e2bd"},{url:"lib/lzutf8.js",revision:"37d1ff3b0710ba8961bcdc2c560baa17"},{url:"lib/marked.min.js",revision:"f12d4a87973b8b958222aca5fdb84394"},{url:"lib/molang-prism-syntax.js",revision:"4b9be48b3e6e9205517a7ff077c2a63e"},{url:"lib/molang.umd.js",revision:"871d1a189e1560a3b4b1ec5238562c5d"},{url:"lib/peer.min.js",revision:"da4b6c59e67068a4da26ebfc6b52f7c5"},{url:"lib/prism.js",revision:"f60031ca28963cd4f765111f42cbf615"},{url:"lib/purify.min.js",revision:"73b8be8a1f049413506c1578a0cebaaa"},{url:"lib/spectrum.js",revision:"a2be6576c3b44bdb4ffce313816e5a65"},{url:"lib/targa.js",revision:"17c5ce65af686baa97294748f929541e"},{url:"lib/three_custom.js",revision:"461c26c501bb7415ed90c370cd09cf43"},{url:"lib/three.min.js",revision:"0a8a3113f4c503210e9a8de577025ff4"},{url:"lib/vue_sortable.js",revision:"87cfedd91d600fb8d44668a0e83d4101"},{url:"lib/vue.min.js",revision:"0a9a4681294d8c5f476687eea6e74842"},{url:"lib/VuePrismEditor.min.js",revision:"e4f8e303a2254691da6efb332ee6635e"},{url:"lib/wintersky.umd.js",revision:"d4ad68f4d2fc1ef3f349a86ab3fa3d22"},{url:"css/dialogs.css",revision:"dc79edbe8441c0cf79a459ccd4f4e016"},{url:"css/fontawesome.css",revision:"1cd088b35b0d3fac7265a75875471484"},{url:"css/general.css",revision:"d320304c1a4572c09f85b147eca61df8"},{url:"css/jquery-ui.min.css",revision:"db778110650dea1e4533cd09f75533a2"},{url:"css/panels.css",revision:"b74e98b905013cee268ed2b80d9f662b"},{url:"css/prism.css",revision:"e6a2c692b28dbb89c1a06154a868bb5c"},{url:"css/setup.css",revision:"742a33d6c589e37ad51b7a0f4517bc98"},{url:"css/spectrum.css",revision:"f28ec14a773962b92665392c52e967bf"},{url:"css/start_screen.css",revision:"f65fd521b0a7d05e6fc486d46fc3fc7c"},{url:"css/w3.css",revision:"04db708c100ea3937a3a5bf138cfcbf3"},{url:"css/window.css",revision:"9f797f6c317dc34912551a141c856030"},{url:"assets/armor_stand.png",revision:"d936b2d5fe33f45fc3b67ebace503bf6"},{url:"assets/brush.png",revision:"b6a28bb79f9dea063d7a2ac620a3236a"},{url:"assets/hud.png",revision:"049320fa871e4fbe54978dd6043acd8c"},{url:"assets/inventory_full.png",revision:"430fc3c0627f04302d457eead5e1fa16"},{url:"assets/inventory_nine.png",revision:"28cc307e3f2ee4570532fe6ee01a6131"},{url:"assets/item_frame.png",revision:"08eaa797bfb1ceb3784b6fa04ce77387"},{url:"assets/locator.png",revision:"8448be12d087adfc0aea285af26ecbe8"},{url:"assets/logo_cutout.svg",revision:"1a2b2e5db76846d910af304e87605aee"},{url:"assets/logo_text_white.svg",revision:"021abc358f6fd915b2ad77d548bb1954"},{url:"assets/missing_blend.png",revision:"5d055c1476e74bcdfd987ab62045b8a6"},{url:"assets/missing.png",revision:"462b3d598e49c3bbd453bb01d88ac6aa"},{url:"assets/north.png",revision:"d6c44f75fe7a6dd16927b9b8d8d0e9c2"},{url:"assets/null_object.png",revision:"298d80b3ba99198a3688e8c558dda065"},{url:"assets/player_skin.png",revision:"bd60891dc6eacb8f038556dfdb1dadcc"},{url:"assets/poses/aiming.svg",revision:"99cc4acebde8bf10e5578a6ff0c4d418"},{url:"assets/poses/crouching.svg",revision:"ea45f7a8485078ac9fc50bf6cf032542"},{url:"assets/poses/jumping.svg",revision:"268a1a6966abb5b8eef0fc783017b980"},{url:"assets/poses/natural.svg",revision:"1bc79dd4c044a9fd330745699db6d721"},{url:"assets/poses/none.svg",revision:"38929100bfd2f391c3650fdde20b0e03"},{url:"assets/poses/sitting.svg",revision:"23eab940f7e9729a6e24438487553e7d"},{url:"assets/poses/walking.svg",revision:"eee91b6c25b42f5901961d39d35854d5"},{url:"assets/preview_scenes/mc_end.png",revision:"1406cfcc761cdeab183d76a7ca7f72a2"},{url:"assets/preview_scenes/mc_nether.png",revision:"8610f68e5e0cf57d99370b29d04f6772"},{url:"assets/preview_scenes/mc_overworld.png",revision:"c3b21121a345ade4dab50cc987fd6863"},{url:"assets/preview_scenes/studio.png",revision:"116be6e8296015a2653fe5a8c6e23ffe"},{url:"assets/rotate_cursor.png",revision:"092b9000c5901c27d4bee37236f6407c"},{url:"assets/splash_art.png",revision:"c7217e28768f89c102003545e4331b5d"},{url:"assets/uv_preview.png",revision:"dc46b13a7544fe5b4381ef8295c72c8b"},{url:"assets/vertex.png",revision:"6b314afc9e5a153db6798cf8c0a93918"},{url:"assets/zombie.png",revision:"a5fd9124b9eab1bc7880fea5f1b26e4c"},{url:"font/Assistant-Bold.ttf",revision:"d582391da9a68daf10a2ed2514c33826"},{url:"font/Assistant-ExtraBold.ttf",revision:"f2bbc6bae2ee3ce641adc1bb1a655371"},{url:"font/Assistant-ExtraLight.ttf",revision:"5e4d348ae3eca48143c0274a3124a9c0"},{url:"font/Assistant-Light.ttf",revision:"5415f395c1567a5c19efc1dc2892927a"},{url:"font/Assistant-Regular.ttf",revision:"e2b46dd69f54e57767ceef1d5fc8e688"},{url:"font/Assistant-SemiBold.ttf",revision:"d6759edb35ac7f29a029caa1192c010d"},{url:"font/fa-brands-400.woff2",revision:"a9afdb72826cde196ddf29eb8f9d0f8f"},{url:"font/fa-regular-400.woff2",revision:"f817938f131b0cabee81e59a96f9c2a6"},{url:"font/fa-solid-900.woff2",revision:"297973a488f688271dd223d542ba2697"},{url:"font/icomoon.ttf",revision:"e41af0d7e74154a711fc444d30b79e80"},{url:"font/icomoon.woff",revision:"86f5286db61fca481661deb53c4cfd3a"},{url:"font/MaterialIcons-Regular.ttf",revision:"4e85bc9ebe07e0340c9c4fc2f6c38908"}],{})}));
