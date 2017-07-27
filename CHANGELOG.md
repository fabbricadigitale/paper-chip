<a name="0.11.0"></a>
# [0.11.0](https://github.com/fabbricadigitale/paper-chip/compare/v0.10.1...v0.11.0) (2017-07-27)


### Fix

* Add test to show that observer is not invoked  ([75952370700f598baecc9ec122cb8fd7772f9491](https://github.com/fabbricadigitale/paper-chip/commit/75952370700f598baecc9ec122cb8fd7772f9491))
* Chip sizing  ([e1d65b0151eba992599698f6c43538bd1f85e839](https://github.com/fabbricadigitale/paper-chip/commit/e1d65b0151eba992599698f6c43538bd1f85e839)), closes [#31](https://github.com/fabbricadigitale/paper-chip/issues/31)
* Highlighting of label now works ([3f3c32bf9c5a3fcf845bf1ff6fbba6b9401ac367](https://github.com/fabbricadigitale/paper-chip/commit/3f3c32bf9c5a3fcf845bf1ff6fbba6b9401ac367))
* Observe array.splices instead of array.length  ([5fffabfa02ff2f7e0b331a30e804074a7e2e017c](https://github.com/fabbricadigitale/paper-chip/commit/5fffabfa02ff2f7e0b331a30e804074a7e2e017c)), closes [#32](https://github.com/fabbricadigitale/paper-chip/issues/32)
* Run all the paper-chip-input unit tests  ([c36aaa38aa59b0869d697b3ccb8cbd4d34741c93](https://github.com/fabbricadigitale/paper-chip/commit/c36aaa38aa59b0869d697b3ccb8cbd4d34741c93))
* Slightly change observer to let it be invoked  ([8fd3d7490873e9a718de4ce362487ef40fa1fc1c](https://github.com/fabbricadigitale/paper-chip/commit/8fd3d7490873e9a718de4ce362487ef40fa1fc1c)), closes [#32](https://github.com/fabbricadigitale/paper-chip/issues/32)
* Underline displaying is now configurable  ([db7e9758aeaa92b29dc7f42ca0a4990fe9fe0787](https://github.com/fabbricadigitale/paper-chip/commit/db7e9758aeaa92b29dc7f42ca0a4990fe9fe0787)), closes [#30](https://github.com/fabbricadigitale/paper-chip/issues/30)

### New

* Commit convention enforcement  ([0dc2944fe699cb607692b9188a98745ab8dc8a94](https://github.com/fabbricadigitale/paper-chip/commit/0dc2944fe699cb607692b9188a98745ab8dc8a94)), closes [#15](https://github.com/fabbricadigitale/paper-chip/issues/15)
* Floating label  ([f8ef6abea568e8e43aa2837fe9a761c09d2c477e](https://github.com/fabbricadigitale/paper-chip/commit/f8ef6abea568e8e43aa2837fe9a761c09d2c477e)), closes [#34](https://github.com/fabbricadigitale/paper-chip/issues/34)

### Udpate

* Floating label positioning refinements and attributes  ([f569d23b239d8c67cb7d7d334bac4269db7ac36d](https://github.com/fabbricadigitale/paper-chip/commit/f569d23b239d8c67cb7d7d334bac4269db7ac36d))

### Update

* Floating label positioning ([41c564f0b0e156bfc1dcb2719cc7ddab152ea8e6](https://github.com/fabbricadigitale/paper-chip/commit/41c564f0b0e156bfc1dcb2719cc7ddab152ea8e6))
* Remove unneeded CSS selector for animations ([cce343e9c3104c462c4a36947428f9bcf4e91fba](https://github.com/fabbricadigitale/paper-chip/commit/cce343e9c3104c462c4a36947428f9bcf4e91fba))
* Support also mobile browsers ([8bdef8a3883d1e1ad133e3c4d00e3e51abe200d0](https://github.com/fabbricadigitale/paper-chip/commit/8bdef8a3883d1e1ad133e3c4d00e3e51abe200d0))



<a name="0.10.1"></a>
## [0.10.1](https://github.com/fabbricadigitale/paper-chip/compare/v0.10.0...v0.10.1) (2017-07-17)


### Docs

* Clarifying how the detection of position (for element in removal) works ([a0ed8912fae6168e82ae189d00d041b2dd4091d0](https://github.com/fabbricadigitale/paper-chip/commit/a0ed8912fae6168e82ae189d00d041b2dd4091d0))
* Demo now works also for polyfilled browsers  ([f56a6fe2ebb33b00bcecb971ae7c0984a1d2fd88](https://github.com/fabbricadigitale/paper-chip/commit/f56a6fe2ebb33b00bcecb971ae7c0984a1d2fd88)), closes [#28](https://github.com/fabbricadigitale/paper-chip/issues/28)

### Fix

* Correct detection of position of the element which is in removal ([bac39529618263ddad77d78194dd1aef86f989b2](https://github.com/fabbricadigitale/paper-chip/commit/bac39529618263ddad77d78194dd1aef86f989b2))
* Ensure the remove API silently fails when element is not longer in the DOM ([66c1527f7bf3c86674c3b2bd7fc8879236061d2d](https://github.com/fabbricadigitale/paper-chip/commit/66c1527f7bf3c86674c3b2bd7fc8879236061d2d))
* Execute SauceLabs only on internal PRs ([538e8b0f5b541bd7ea4b4547fb46478675fa2516](https://github.com/fabbricadigitale/paper-chip/commit/538e8b0f5b541bd7ea4b4547fb46478675fa2516))
* Overcome NodeList partial support on some browsers ... ([3ce70d4559724a1385a518fee9973ba2fb82924e](https://github.com/fabbricadigitale/paper-chip/commit/3ce70d4559724a1385a518fee9973ba2fb82924e))
* Prevent self deletion of paper-chip when it is managed by a wrapper  ([601b23f7352c68d559be0d94d92a4fd0ce4bb08f](https://github.com/fabbricadigitale/paper-chip/commit/601b23f7352c68d559be0d94d92a4fd0ce4bb08f)), closes [#23](https://github.com/fabbricadigitale/paper-chip/issues/23)
* Remove duplicate attribute ([98dfe41fe1d9b1021a1483e8d94f80b85e3a5579](https://github.com/fabbricadigitale/paper-chip/commit/98dfe41fe1d9b1021a1483e8d94f80b85e3a5579))
* Slotted styles does not work on FF and Safari  ([1d353ecfa3860285a934e6a688095aad2c67e658](https://github.com/fabbricadigitale/paper-chip/commit/1d353ecfa3860285a934e6a688095aad2c67e658)), closes [#25](https://github.com/fabbricadigitale/paper-chip/issues/25)

### Update

* Other test for the autocomplete case ([5932e02a68a98108e853e7a9c76b264c1378648e](https://github.com/fabbricadigitale/paper-chip/commit/5932e02a68a98108e853e7a9c76b264c1378648e))
* Test the correct order is retained when more elements are removed from a container ([f788bcbf3e55321e9c9a785675a58cb34fa87c76](https://github.com/fabbricadigitale/paper-chip/commit/f788bcbf3e55321e9c9a785675a58cb34fa87c76))
* Test the self removing API of paper-chip standalone element ([4b8d066f47dae9ba0c9a7064951e3cfb2069abf4](https://github.com/fabbricadigitale/paper-chip/commit/4b8d066f47dae9ba0c9a7064951e3cfb2069abf4))



<a name="0.10.0"></a>
# [0.10.0](https://github.com/fabbricadigitale/paper-chip/compare/v0.9.2...v0.10.0) (2017-06-16)


### Docs

* Browser support plus build status badges ([6a80728738e3441f3ca2137609d8155ef80dc234](https://github.com/fabbricadigitale/paper-chip/commit/6a80728738e3441f3ca2137609d8155ef80dc234))
* Contributing guide ([a37a95a830269a63fbc5a74634d4a08b3e6f134c](https://github.com/fabbricadigitale/paper-chip/commit/a37a95a830269a63fbc5a74634d4a08b3e6f134c))
* Live demo ([cca644eb87e828e8b6c6dfeea02fd8232d0675b3](https://github.com/fabbricadigitale/paper-chip/commit/cca644eb87e828e8b6c6dfeea02fd8232d0675b3))
* README ([ea58f03a2834c8bbfb443a69cf2def12e8dfa5e4](https://github.com/fabbricadigitale/paper-chip/commit/ea58f03a2834c8bbfb443a69cf2def12e8dfa5e4))

### Fix

* Add flush in test element ([197cb077f0c64c45d8ccb7cfacd74040ae0602f8](https://github.com/fabbricadigitale/paper-chip/commit/197cb077f0c64c45d8ccb7cfacd74040ae0602f8))
* Demo ([0dfa73ecd0fb9c55c95c801f0773d6e08df111d4](https://github.com/fabbricadigitale/paper-chip/commit/0dfa73ecd0fb9c55c95c801f0773d6e08df111d4))
* Flush test fixture element ([043477176666f01db38083eb0dacf0d42b0cb006](https://github.com/fabbricadigitale/paper-chip/commit/043477176666f01db38083eb0dacf0d42b0cb006))
* Remove the unnecessary reflectToAttribute  ([5b7bb9bb54ef46a129d6f2c8d020766200699098](https://github.com/fabbricadigitale/paper-chip/commit/5b7bb9bb54ef46a129d6f2c8d020766200699098))
* Remove works on both elements now ([4114c86bb25e459ae457988f75213b2a59ad0e2e](https://github.com/fabbricadigitale/paper-chip/commit/4114c86bb25e459ae457988f75213b2a59ad0e2e))
* Restore avatars in demo page ([9c62cd626319226e0ba90400e2d894b70fbc9140](https://github.com/fabbricadigitale/paper-chip/commit/9c62cd626319226e0ba90400e2d894b70fbc9140))
* Toggling status for multiline chips ([b2ed7dd380e1af9a39dafc9278c86ccb92b0ee2b](https://github.com/fabbricadigitale/paper-chip/commit/b2ed7dd380e1af9a39dafc9278c86ccb92b0ee2b))
* Translate Array.prototype.includes to Array.prototype.indexOf ([315b3fa0cfd0b3945109308b9232f8ef1f6650b0](https://github.com/fabbricadigitale/paper-chip/commit/315b3fa0cfd0b3945109308b9232f8ef1f6650b0))
* Unsupport some platform/browser combinations ([fd90f969c6a7fe5dc05e5ed8d243acbfa3b2a5a7](https://github.com/fabbricadigitale/paper-chip/commit/fd90f969c6a7fe5dc05e5ed8d243acbfa3b2a5a7))

### New

* Autocomplete feature for paper-chip-input ([23429849105af2a6ccfa1a8f6f7f39415ca5c8f0](https://github.com/fabbricadigitale/paper-chip/commit/23429849105af2a6ccfa1a8f6f7f39415ca5c8f0))
* CI setup ([9da8e095c4efe42ee751dcdea80fcc10c83c3644](https://github.com/fabbricadigitale/paper-chip/commit/9da8e095c4efe42ee751dcdea80fcc10c83c3644))
* Enter keys to submit chip are now configurable ([4805dad0a43183c91381c19dcace24099c7aec7b](https://github.com/fabbricadigitale/paper-chip/commit/4805dad0a43183c91381c19dcace24099c7aec7b))
* Filter logic is now customizable  ([cc76e195a84c10949f018c1969d7a2ae7fce75ad](https://github.com/fabbricadigitale/paper-chip/commit/cc76e195a84c10949f018c1969d7a2ae7fce75ad)), closes [#7](https://github.com/fabbricadigitale/paper-chip/issues/7)
* SauceLabs setup ([ee7d0a6eb2ce892aab7f28cc14298cf4206e0035](https://github.com/fabbricadigitale/paper-chip/commit/ee7d0a6eb2ce892aab7f28cc14298cf4206e0035))

### Update

* Almost ready to release ([a8c576dd60a6fdffc372a5c303e0a395a63fd9eb](https://github.com/fabbricadigitale/paper-chip/commit/a8c576dd60a6fdffc372a5c303e0a395a63fd9eb))
* DisconnectedCallback test  ([32c10498abf7f2df6e8213d45f3c08fdb3e834b7](https://github.com/fabbricadigitale/paper-chip/commit/32c10498abf7f2df6e8213d45f3c08fdb3e834b7))
* Management of the status (opened or not) of multiline chips ([9e4e7c314fc88efc861c07db8397d3df8ce77a21](https://github.com/fabbricadigitale/paper-chip/commit/9e4e7c314fc88efc861c07db8397d3df8ce77a21))
* Test autocomplete feature for paper-chip-input ([e8b1c90cb63bd081d24150ac9e4b818709f76c0b](https://github.com/fabbricadigitale/paper-chip/commit/e8b1c90cb63bd081d24150ac9e4b818709f76c0b))
* Tests ([7096a90dd2236968646edd9c1c235a51a70b81d4](https://github.com/fabbricadigitale/paper-chip/commit/7096a90dd2236968646edd9c1c235a51a70b81d4))



<a name="0.9.2"></a>
## [0.9.2](https://github.com/fabbricadigitale/paper-chip/compare/v0.9.1...v0.9.2) (2017-06-12)


### Build

* Remove unnecessary bower file versioning ([5c4542c96a12e70248ecb433c3a4927ce65f78b1](https://github.com/fabbricadigitale/paper-chip/commit/5c4542c96a12e70248ecb433c3a4927ce65f78b1))

### Upgrade

* Bower deps with GitHub shorthand ([bdcb984ddc5d79bf66946ccc26c63604a07e390c](https://github.com/fabbricadigitale/paper-chip/commit/bdcb984ddc5d79bf66946ccc26c63604a07e390c))



<a name="0.9.1"></a>
## [0.9.1](https://github.com/fabbricadigitale/paper-chip/compare/v0.9.0...v0.9.1) (2017-06-09)


### Docs

* Docs about default styles ([171ec1e96a2a13d35b8085b35c977a954fd029cf](https://github.com/fabbricadigitale/paper-chip/commit/171ec1e96a2a13d35b8085b35c977a954fd029cf))



<a name="0.9.0"></a>
# 0.9.0 (2017-06-09)


### Deps

* Correct WCT setup again ([787a5c636d883b8b907f9775ef953d64d0cd1f59](https://github.com/fabbricadigitale/paper-chip/commit/787a5c636d883b8b907f9775ef953d64d0cd1f59))

### Docs

* Add testing documentation in README ([55e93de5e69d4e65ba649ee5cef925763ed99a00](https://github.com/fabbricadigitale/paper-chip/commit/55e93de5e69d4e65ba649ee5cef925763ed99a00))
* Definitions and examples ([525b15d81a570e751d29cf63f20f1e6faa7afa46](https://github.com/fabbricadigitale/paper-chip/commit/525b15d81a570e751d29cf63f20f1e6faa7afa46))
* Inline demo within the README ([9c077551a0b62ec04a41e8914d133d9c1f7e38d0](https://github.com/fabbricadigitale/paper-chip/commit/9c077551a0b62ec04a41e8914d133d9c1f7e38d0))
* Paper-chip docs ([92b9cb4785ae0875b438b0dc1b9332fab43c4116](https://github.com/fabbricadigitale/paper-chip/commit/92b9cb4785ae0875b438b0dc1b9332fab43c4116))
* README ([3a7d8945f40a4402ab9d3f305009feed8533e930](https://github.com/fabbricadigitale/paper-chip/commit/3a7d8945f40a4402ab9d3f305009feed8533e930))
* README ([17cd4751a617fffe90349987d32bf358602e818d](https://github.com/fabbricadigitale/paper-chip/commit/17cd4751a617fffe90349987d32bf358602e818d))

### Fix

* Add workaround for wct issue  ([d2ac8f4c7b930e64cced27d7a362c2ea26331514](https://github.com/fabbricadigitale/paper-chip/commit/d2ac8f4c7b930e64cced27d7a362c2ea26331514))
* Checks array initialization when push tag ([3cd0f40cd4be48c38795a4ffd7e7c72414a816ab](https://github.com/fabbricadigitale/paper-chip/commit/3cd0f40cd4be48c38795a4ffd7e7c72414a816ab))
* Chips now have a max-width and nowrap plugin ([4c4760e701f583d7b56ab1d121374caf193517e3](https://github.com/fabbricadigitale/paper-chip/commit/4c4760e701f583d7b56ab1d121374caf193517e3))
* Code style errors ([aa9159f764dc2e3a1272efee205c68ec1e8e2cd5](https://github.com/fabbricadigitale/paper-chip/commit/aa9159f764dc2e3a1272efee205c68ec1e8e2cd5))
* ES6 compliance ([1cba00e3f9906cd018df96555c025734c6cd5a23](https://github.com/fabbricadigitale/paper-chip/commit/1cba00e3f9906cd018df96555c025734c6cd5a23))
* Hide and scroll top when close tips ([7ddfc0441bd155e2716f76f3c1e40df918075561](https://github.com/fabbricadigitale/paper-chip/commit/7ddfc0441bd155e2716f76f3c1e40df918075561))
* Remove log ([9f7da08a926fde350a476703299d187c98804216](https://github.com/fabbricadigitale/paper-chip/commit/9f7da08a926fde350a476703299d187c98804216))
* Remove unneeded element to manage scrolling ([0f5dead59399a7d81c0c127f7109c1bb9fa84acc](https://github.com/fabbricadigitale/paper-chip/commit/0f5dead59399a7d81c0c127f7109c1bb9fa84acc))
* Remove wrong license message ([ca39475a767fc81f9848c22495c38c41b1e1f973](https://github.com/fabbricadigitale/paper-chip/commit/ca39475a767fc81f9848c22495c38c41b1e1f973))
* Restore bubbling property in remove-chip event ([852f942c62977c67fdf0c4375e9781f283ac17c0](https://github.com/fabbricadigitale/paper-chip/commit/852f942c62977c67fdf0c4375e9781f283ac17c0))
* Typo in demo ([a9f7c2f2bb5880e2730f99b9bcd5c2113d9881f7](https://github.com/fabbricadigitale/paper-chip/commit/a9f7c2f2bb5880e2730f99b9bcd5c2113d9881f7))

### New

* Add bower.json ([1dfb174f275637ab42c3ce8b6bd2e62d5969904e](https://github.com/fabbricadigitale/paper-chip/commit/1dfb174f275637ab42c3ce8b6bd2e62d5969904e))
* Add config files ([95dcfcf7593d25d9ff7294acddd3123604de6c2a](https://github.com/fabbricadigitale/paper-chip/commit/95dcfcf7593d25d9ff7294acddd3123604de6c2a))
* Add helper for scrolling ([818e294f8efa05ed18f0ac40fe0799368ac5ba52](https://github.com/fabbricadigitale/paper-chip/commit/818e294f8efa05ed18f0ac40fe0799368ac5ba52))
* Add ignore file ([bd541175e6f0007b2972e0a6a43f45dd38e5394e](https://github.com/fabbricadigitale/paper-chip/commit/bd541175e6f0007b2972e0a6a43f45dd38e5394e))
* Add label in paper-chip-input ([a8418a038c1354ef3e49bc598da3958c2db7de87](https://github.com/fabbricadigitale/paper-chip/commit/a8418a038c1354ef3e49bc598da3958c2db7de87))
* Add papar-chip input with autocomplete ([8540e0fec99f114465b19602742128d90144ef8f](https://github.com/fabbricadigitale/paper-chip/commit/8540e0fec99f114465b19602742128d90144ef8f))
* Add paper-chip-input wct test ([e37526b074b1023b8d64367266c6f0b79a07313c](https://github.com/fabbricadigitale/paper-chip/commit/e37526b074b1023b8d64367266c6f0b79a07313c))
* Add paper-chip-input-autocomplete test ([7365d159a364391abb11ec19b1a5b278c236eef5](https://github.com/fabbricadigitale/paper-chip/commit/7365d159a364391abb11ec19b1a5b278c236eef5))
* Add placeholder ([56bf33772adf61922c78d386748a23efca407fe1](https://github.com/fabbricadigitale/paper-chip/commit/56bf33772adf61922c78d386748a23efca407fe1))
* Add private iconset ([d932bb228c9a0aea07a4ce6026be5b2b6d7563cf](https://github.com/fabbricadigitale/paper-chip/commit/d932bb228c9a0aea07a4ce6026be5b2b6d7563cf))
* Add support for key-value approach ([9dabc43f5c4862bf6de9f23b36cac18648d80dfe](https://github.com/fabbricadigitale/paper-chip/commit/9dabc43f5c4862bf6de9f23b36cac18648d80dfe))
* Add value property ([469dd755032159a64e6fc15a61509e77eca0b9c9](https://github.com/fabbricadigitale/paper-chip/commit/469dd755032159a64e6fc15a61509e77eca0b9c9))
* Add web-component-tester test ([ac30f1e094a57046ff93138e60d68ef7bcc5d062](https://github.com/fabbricadigitale/paper-chip/commit/ac30f1e094a57046ff93138e60d68ef7bcc5d062))
* Authors ([1649bb2dc2e9d1d3bae5fead70d9789a1e7a7820](https://github.com/fabbricadigitale/paper-chip/commit/1649bb2dc2e9d1d3bae5fead70d9789a1e7a7820))
* Autocomplete datasource properties are configurable now ([4b6b561cac09f4e470f8176a55096f883f686071](https://github.com/fabbricadigitale/paper-chip/commit/4b6b561cac09f4e470f8176a55096f883f686071))
* Badges ([6cbf20c7dc8b0cf271b5e411364e2246c311c2aa](https://github.com/fabbricadigitale/paper-chip/commit/6cbf20c7dc8b0cf271b5e411364e2246c311c2aa))
* Base version ([263deb19e3959c8c9f1a7923c226de846c70f202](https://github.com/fabbricadigitale/paper-chip/commit/263deb19e3959c8c9f1a7923c226de846c70f202))
* Binding tag property ([6b5e24c6e323ad856c7d5e8bab71568ff9c12feb](https://github.com/fabbricadigitale/paper-chip/commit/6b5e24c6e323ad856c7d5e8bab71568ff9c12feb))
* Checks duplicated value ([30d9f2daff083cbdc36091714ca29371bd6971f3](https://github.com/fabbricadigitale/paper-chip/commit/30d9f2daff083cbdc36091714ca29371bd6971f3))
* Empty skeleton project ([6ba14fc12a37328de40992c7132e701882963ea4](https://github.com/fabbricadigitale/paper-chip/commit/6ba14fc12a37328de40992c7132e701882963ea4))
* Initial commit ([2ad4e3b12a20815481a5206bf422459fb655f658](https://github.com/fabbricadigitale/paper-chip/commit/2ad4e3b12a20815481a5206bf422459fb655f658))
* License ([670395ff74871e80a84aa160f18147929c090073](https://github.com/fabbricadigitale/paper-chip/commit/670395ff74871e80a84aa160f18147929c090073))
* Material restyling ([4af055d6262b5d3d92b3effd42d5cacef233e5fb](https://github.com/fabbricadigitale/paper-chip/commit/4af055d6262b5d3d92b3effd42d5cacef233e5fb))
* Multi row chips ([909093c534a6be629ff959903e315c6d978cb1f7](https://github.com/fabbricadigitale/paper-chip/commit/909093c534a6be629ff959903e315c6d978cb1f7))
* Notify externally tags value ([929e3ceae80dceed8b68e86b7e336ff8c59432e3](https://github.com/fabbricadigitale/paper-chip/commit/929e3ceae80dceed8b68e86b7e336ff8c59432e3))
* Paper-chip-input ([0a90b4c042c05064c9b7864dcfd9582c427f7449](https://github.com/fabbricadigitale/paper-chip/commit/0a90b4c042c05064c9b7864dcfd9582c427f7449))
* Remove chip at a specific index now works ([16b95fa9ea5f2ee320dd980939b4e9fbd74aae34](https://github.com/fabbricadigitale/paper-chip/commit/16b95fa9ea5f2ee320dd980939b4e9fbd74aae34))
* Remove chip key aware now works ([0d3b152709e06cdede0e2af1fd84eb955a0a3715](https://github.com/fabbricadigitale/paper-chip/commit/0d3b152709e06cdede0e2af1fd84eb955a0a3715))

### Update

* Add eslint linter ([90b38e9796cd29644ea1f8ad463aeee889ef55d1](https://github.com/fabbricadigitale/paper-chip/commit/90b38e9796cd29644ea1f8ad463aeee889ef55d1))
* Add more paper-chip test ([17a3c8a55cf6c2f5b5a1552c7e7beb149a847c34](https://github.com/fabbricadigitale/paper-chip/commit/17a3c8a55cf6c2f5b5a1552c7e7beb149a847c34))
* Add padding when chip is not removable ([222bb946c67cfce6623b0fdb68d33b897ec23da3](https://github.com/fabbricadigitale/paper-chip/commit/222bb946c67cfce6623b0fdb68d33b897ec23da3))
* Add/remove chip test in paper-chip-input test suite ([1c90413418b5270ac16883d61b8f2729fed175c0](https://github.com/fabbricadigitale/paper-chip/commit/1c90413418b5270ac16883d61b8f2729fed175c0))
* Autocomplete test cases ([e5e29292ef158331253f9f4fd8480cf9eedc1031](https://github.com/fabbricadigitale/paper-chip/commit/e5e29292ef158331253f9f4fd8480cf9eedc1031))
* Hide tips test ([76d907cb002adc4d8cc2308d87f668978fdcbe87](https://github.com/fabbricadigitale/paper-chip/commit/76d907cb002adc4d8cc2308d87f668978fdcbe87))
* Iniling ES 2015 within HTML ([106ae4809bf56cb6855877990b26dddf1dfa378a](https://github.com/fabbricadigitale/paper-chip/commit/106ae4809bf56cb6855877990b26dddf1dfa378a))
* Linting system ([197273f0efd03945f0891e9cd0108e981895cefc](https://github.com/fabbricadigitale/paper-chip/commit/197273f0efd03945f0891e9cd0108e981895cefc))
* Pop and Push private method definition ([f94e3fb4d29a7fca75f9f358d79d2b4c81753feb](https://github.com/fabbricadigitale/paper-chip/commit/f94e3fb4d29a7fca75f9f358d79d2b4c81753feb))
* Project skeleton ([e2865ed407bbee461bc99d53bc7afbb2494c2b00](https://github.com/fabbricadigitale/paper-chip/commit/e2865ed407bbee461bc99d53bc7afbb2494c2b00))
* Readme ([3f62cb123e2aceb5194c308799c8cb519abfe194](https://github.com/fabbricadigitale/paper-chip/commit/3f62cb123e2aceb5194c308799c8cb519abfe194))
* Readme and docs ([dde58961190b5e1f5d1b1cd3ec19ee8736f1ae8f](https://github.com/fabbricadigitale/paper-chip/commit/dde58961190b5e1f5d1b1cd3ec19ee8736f1ae8f))
* Remove bundler ([6ebb263c1e2f9987774617b6f82deb1d75380bc8](https://github.com/fabbricadigitale/paper-chip/commit/6ebb263c1e2f9987774617b6f82deb1d75380bc8))
* Removed needless css ([ba094547147dc9325c3a1e08d7b94bdfcd104b11](https://github.com/fabbricadigitale/paper-chip/commit/ba094547147dc9325c3a1e08d7b94bdfcd104b11))
* Removed useless code ([9de5aa1a7222c75f9e1e2ce5c03e0080fd89a701](https://github.com/fabbricadigitale/paper-chip/commit/9de5aa1a7222c75f9e1e2ce5c03e0080fd89a701))
* Use demo-snippet in demo page ([ccd0f88e77f3bac5d9f7aa05ae00c610c9b8e136](https://github.com/fabbricadigitale/paper-chip/commit/ccd0f88e77f3bac5d9f7aa05ae00c610c9b8e136))
* Use paper-styles mixins ([dedd984a742ec380d2b84f805a0978845b1b5db6](https://github.com/fabbricadigitale/paper-chip/commit/dedd984a742ec380d2b84f805a0978845b1b5db6))

### Upgrade

* Add compatibility with Polymer 2.0 RC2 ([836f1acf97d98d05f405fd49897157ab110d722f](https://github.com/fabbricadigitale/paper-chip/commit/836f1acf97d98d05f405fd49897157ab110d722f))
* Point to latest polymer 2.0.0 versions ([d7be1ccce3d2bf022d460b4790239780b9cc4e40](https://github.com/fabbricadigitale/paper-chip/commit/d7be1ccce3d2bf022d460b4790239780b9cc4e40))
* Set Polymer 2.0.0 stable version ([aa1f5a7783f92cce6817fd627f4547365a812b12](https://github.com/fabbricadigitale/paper-chip/commit/aa1f5a7783f92cce6817fd627f4547365a812b12))
* Set webcomponentsjs 1.0.0 version ([355c46202f8055d3c44f561597f53a3e18f238e7](https://github.com/fabbricadigitale/paper-chip/commit/355c46202f8055d3c44f561597f53a3e18f238e7))


