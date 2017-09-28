# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.2.0"></a>
# [1.2.0](https://github.com/interfacewerk/iwerk-angular-ui/compare/v1.1.3...v1.2.0) (2017-09-28)


### Bug Fixes

* **dialog:** fix dialog close logic that prevents dialog from re-opening ([d9a3969](https://github.com/interfacewerk/iwerk-angular-ui/commit/d9a3969))


### Features

* **tooltip, popover, dialog:** implement default styles ([#17](https://github.com/interfacewerk/iwerk-angular-ui/issues/17)) ([fdcd2c2](https://github.com/interfacewerk/iwerk-angular-ui/commit/fdcd2c2))



<a name="1.1.3"></a>
## [1.1.3](https://github.com/interfacewerk/iwerk-angular-ui/compare/v1.1.2...v1.1.3) (2017-09-19)


### Bug Fixes

* **aot:** fix aot compatibility by declaring peer dependencies ([#16](https://github.com/interfacewerk/iwerk-angular-ui/issues/16)) ([fd0a330](https://github.com/interfacewerk/iwerk-angular-ui/commit/fd0a330))



<a name="1.1.2"></a>
## [1.1.2](https://github.com/interfacewerk/iwerk-angular-ui/compare/v1.1.1...v1.1.2) (2017-09-19)


### Bug Fixes

* **tooltip:** remove tooltip when directive is destroyed ([197c77a](https://github.com/interfacewerk/iwerk-angular-ui/commit/197c77a))



<a name="1.1.1"></a>
## [1.1.1](https://github.com/interfacewerk/iwerk-angular-ui/compare/v1.1.0...v1.1.1) (2017-09-19)


### Bug Fixes

* **dialog:** fix blocking condition to re-open dialog from directive ([e193dc9](https://github.com/interfacewerk/iwerk-angular-ui/commit/e193dc9))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/interfacewerk/iwerk-angular-ui/compare/v1.0.4...v1.1.0) (2017-09-19)


### Features

* **dialog:** add close method to dialog directive controller ([c356506](https://github.com/interfacewerk/iwerk-angular-ui/commit/c356506))



<a name="1.0.4"></a>
## [1.0.4](https://github.com/interfacewerk/iwerk-angular-ui/compare/v1.0.3...v1.0.4) (2017-09-18)


### Bug Fixes

* **tooltip:** fix smart position calculation by adding element after getting the bounding rect ([35b4a47](https://github.com/interfacewerk/iwerk-angular-ui/commit/35b4a47))



<a name="1.0.3"></a>
## [1.0.3](https://github.com/interfacewerk/iwerk-angular-ui/compare/v1.0.2...v1.0.3) (2017-09-18)


### Bug Fixes

* **popover:** fix click outside condition on target for scroll mask ([60376c3](https://github.com/interfacewerk/iwerk-angular-ui/commit/60376c3))



<a name="1.0.2"></a>
## [1.0.2](https://github.com/interfacewerk/iwerk-angular-ui/compare/v1.0.1...v1.0.2) (2017-09-18)


### Bug Fixes

* **popover:** appends popover elements to the scroll mask instead of appending to the body ([ed8396d](https://github.com/interfacewerk/iwerk-angular-ui/commit/ed8396d))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/interfacewerk/iwerk-angular-ui/compare/v1.0.0...v1.0.1) (2017-09-17)


### Bug Fixes

* **lib:** fix type usage where module does not export correctly types ([c33b48b](https://github.com/interfacewerk/iwerk-angular-ui/commit/c33b48b))



<a name="1.0.0"></a>
# 1.0.0 (2017-09-17)


### Features

* **dialog:** introduce dialog feature ([f2fa94c](https://github.com/interfacewerk/iwerk-angular-ui/commit/f2fa94c))
* **popover:** add esc key to close popover ([cc56655](https://github.com/interfacewerk/iwerk-angular-ui/commit/cc56655))
* **popover:** improve API declarative way and programmatic ([#10](https://github.com/interfacewerk/iwerk-angular-ui/issues/10)) ([8c2eb47](https://github.com/interfacewerk/iwerk-angular-ui/commit/8c2eb47))
* **state-button:** revisit state-button API ([#15](https://github.com/interfacewerk/iwerk-angular-ui/issues/15)) ([dac3452](https://github.com/interfacewerk/iwerk-angular-ui/commit/dac3452)), closes [#3](https://github.com/interfacewerk/iwerk-angular-ui/issues/3)
* **tooltip:** add basic tooltip feature and demo ([d2ae067](https://github.com/interfacewerk/iwerk-angular-ui/commit/d2ae067))


### BREAKING CHANGES

* all components and directives have been revisited. If you were a user of version 0.1.0, please have a look at the README to update to version 1.0.0.
