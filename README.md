# *Compra Producto — Ionic + Angular + Capacitor*
## Descripción del Proyecto
Se desarrollo una aplicación móvil diseñada para capturar imágenes con la cámara del dispositivo, almacenarlas de forma segura en el almacenamiento local de la app, visualizarlas en una galería y eliminarlas con confirmación previa.
> Nota: Este proyecto está configurado para fines de prueba y desarrollo personal.

### Tecnologías Utilizadas

| Categoría | Tecnología / Herramienta |
| :--- | :--- |
| **Framework** | Ionic / Angular (Standalone) |
| **Lenguaje** | HTML y TypeScript |
| **Plugins Nativos (Capacitor)** | `@capacitor/camera` <br> `@capacitor/filesystem` <br> `@capacitor/preferences` |
| **UI/UX** | Componentes de Ionic (`ion-grid`, `ion-fab`, `ion-alert`) e iconos de `ionicons` |

## Características Principales
- Captura de Fotos: Uso de la cámara nativa a través de @capacitor/camera.
- Almacenamiento Local: Las imágenes se guardan en el directorio privado de la aplicación (Directory.Data) usando @capacitor/filesystem.
- Persistencia de Datos: La lista de fotos (rutas y metadatos) se guarda en el almacenamiento local usando @capacitor/preferences.
- Galería Reactiva: Uso de Angular Signals (signal()) para actualizar la vista de la galería de forma instantánea al agregar o eliminar fotos.
- Confirmación de Borrado: Implementación de AlertController de Ionic para preguntar al usuario antes de eliminar una foto, evitando borrados accidentales.
- Manejo de Permisos: Configuración optimizada de permisos en Android para versiones antiguas y modernas (hasta Android 15).

## Características Principales
1) *Inicio:* Al abrir la pestaña de la galería (tab2), se ejecuta ngOnInit() que llama a loadSaved() en el servicio. Este lee las fotos guardadas, las convierte a Base64 para mostrarlas y llena el signal.
2) *Captura:* Al presionar el FAB, se abre la cámara. La foto se toma con CameraResultType.Uri.
3) *Guardado:* La imagen se convierte a Base64, se guarda en el sistema de archivos con un nombre único (Date.now().jpeg) y se actualiza el signal con la nueva foto. La lista se guarda en Preferences.
4) *Eliminación:* Al presionar el ícono de basura, salta una alerta de confirmación. Si el usuario acepta, se filtra el signal, se actualiza Preferences y se borra el archivo físico con Filesystem.deleteFile().


## Instalación y Ejecución
1) Clonar el repositorio.
2) Instalar dependencias:
```
npm install
```
3) Actualiza e instala los plugins nativos de Capacitor en el proyecto de Android:
```
ionic capacitor sync android
```
4) Abre el entorno de desarrollo oficial (Android Studio) con el proyecto de Android ya cargado
```
ionic capacitor open android
```
5) Generar archivos APK para su uso

## Estructura del Poryecto
```
├── android
│   ├── .gradle
│   │   ├── 8.14.3
│   │   │   ├── checksums
│   │   │   │   ├── checksums.lock
│   │   │   │   ├── md5-checksums.bin
│   │   │   │   └── sha1-checksums.bin
│   │   │   ├── executionHistory
│   │   │   │   ├── executionHistory.bin
│   │   │   │   └── executionHistory.lock
│   │   │   ├── expanded
│   │   │   ├── fileChanges
│   │   │   │   └── last-build.bin
│   │   │   ├── fileHashes
│   │   │   │   ├── fileHashes.bin
│   │   │   │   ├── fileHashes.lock
│   │   │   │   └── resourceHashesCache.bin
│   │   │   ├── vcsMetadata
│   │   │   └── gc.properties
│   │   ├── buildOutputCleanup
│   │   │   ├── buildOutputCleanup.lock
│   │   │   ├── cache.properties
│   │   │   └── outputFiles.bin
│   │   ├── vcs-1
│   │   │   └── gc.properties
│   │   ├── config.properties
│   │   └── file-system.probe
│   ├── .kotlin
│   │   └── sessions
│   ├── app
│   │   ├── src
│   │   │   ├── androidTest
│   │   │   │   └── java
│   │   │   │       └── com
│   │   │   │           └── getcapacitor
│   │   │   │               └── myapp
│   │   │   │                   └── ExampleInstrumentedTest.java
│   │   │   ├── main
│   │   │   │   ├── assets
│   │   │   │   │   ├── public
│   │   │   │   │   │   ├── assets
│   │   │   │   │   │   │   ├── icon
│   │   │   │   │   │   │   │   └── favicon.png
│   │   │   │   │   │   │   └── shapes.svg
│   │   │   │   │   │   ├── 3rdpartylicenses.txt
│   │   │   │   │   │   ├── chunk-1WgjXSTw.js
│   │   │   │   │   │   ├── chunk-Bd3FULOj.js
│   │   │   │   │   │   ├── chunk-BhCIjj5b.js
│   │   │   │   │   │   ├── chunk-BihQKm3j.js
│   │   │   │   │   │   ├── chunk-BkhoTeoZ.js
│   │   │   │   │   │   ├── chunk-By_I2LGL.js
│   │   │   │   │   │   ├── chunk-C-xDs7kw.js
│   │   │   │   │   │   ├── chunk-C0G7paT8.js
│   │   │   │   │   │   ├── chunk-CABSGZFi.js
│   │   │   │   │   │   ├── chunk-CJgbv2WU.js
│   │   │   │   │   │   ├── chunk-CJweyAKn.js
│   │   │   │   │   │   ├── chunk-CO6Tr1NV.js
│   │   │   │   │   │   ├── chunk-CPEW0L4K.js
│   │   │   │   │   │   ├── chunk-CSnEwljQ.js
│   │   │   │   │   │   ├── chunk-CXoyKwyv.js
│   │   │   │   │   │   ├── chunk-CaX4BTDe.js
│   │   │   │   │   │   ├── chunk-CtSE9z45.js
│   │   │   │   │   │   ├── chunk-Cu-j4W8y.js
│   │   │   │   │   │   ├── chunk-D9AI81tR.js
│   │   │   │   │   │   ├── chunk-DC4InaKw.js
│   │   │   │   │   │   ├── chunk-DDKjucpO.js
│   │   │   │   │   │   ├── chunk-DEQTwfN6.js
│   │   │   │   │   │   ├── chunk-DPgObXcX.js
│   │   │   │   │   │   ├── chunk-Dhz-P9mS.js
│   │   │   │   │   │   ├── chunk-DojQSnuK.js
│   │   │   │   │   │   ├── chunk-DqCAJwmH.js
│   │   │   │   │   │   ├── chunk-DyOoJkOx.js
│   │   │   │   │   │   ├── chunk-KS4AUMYG.js
│   │   │   │   │   │   ├── chunk-PARCQRHM.js
│   │   │   │   │   │   ├── chunk-SWCFGJJZ.js
│   │   │   │   │   │   ├── chunk-UzeKMa2u.js
│   │   │   │   │   │   ├── chunk-ck-ffzct.js
│   │   │   │   │   │   ├── chunk-u--W7dek.js
│   │   │   │   │   │   ├── cordova.js
│   │   │   │   │   │   ├── cordova_plugins.js
│   │   │   │   │   │   ├── index.html
│   │   │   │   │   │   ├── main-NUQMT4DP.js
│   │   │   │   │   │   ├── prerendered-routes.json
│   │   │   │   │   │   └── styles-QP5JXTGN.css
│   │   │   │   │   ├── capacitor.config.json
│   │   │   │   │   └── capacitor.plugins.json
│   │   │   │   ├── java
│   │   │   │   │   └── io
│   │   │   │   │       └── ionic
│   │   │   │   │           └── starter
│   │   │   │   │               └── MainActivity.java
│   │   │   │   ├── res
│   │   │   │   │   ├── drawable
│   │   │   │   │   │   ├── ic_launcher_background.xml
│   │   │   │   │   │   └── splash.png
│   │   │   │   │   ├── drawable-land-hdpi
│   │   │   │   │   │   └── splash.png
│   │   │   │   │   ├── drawable-land-mdpi
│   │   │   │   │   │   └── splash.png
│   │   │   │   │   ├── drawable-land-xhdpi
│   │   │   │   │   │   └── splash.png
│   │   │   │   │   ├── drawable-land-xxhdpi
│   │   │   │   │   │   └── splash.png
│   │   │   │   │   ├── drawable-land-xxxhdpi
│   │   │   │   │   │   └── splash.png
│   │   │   │   │   ├── drawable-port-hdpi
│   │   │   │   │   │   └── splash.png
│   │   │   │   │   ├── drawable-port-mdpi
│   │   │   │   │   │   └── splash.png
│   │   │   │   │   ├── drawable-port-xhdpi
│   │   │   │   │   │   └── splash.png
│   │   │   │   │   ├── drawable-port-xxhdpi
│   │   │   │   │   │   └── splash.png
│   │   │   │   │   ├── drawable-port-xxxhdpi
│   │   │   │   │   │   └── splash.png
│   │   │   │   │   ├── drawable-v24
│   │   │   │   │   │   └── ic_launcher_foreground.xml
│   │   │   │   │   ├── layout
│   │   │   │   │   │   └── activity_main.xml
│   │   │   │   │   ├── mipmap-anydpi-v26
│   │   │   │   │   │   ├── ic_launcher.xml
│   │   │   │   │   │   └── ic_launcher_round.xml
│   │   │   │   │   ├── mipmap-hdpi
│   │   │   │   │   │   ├── ic_launcher.png
│   │   │   │   │   │   ├── ic_launcher_foreground.png
│   │   │   │   │   │   └── ic_launcher_round.png
│   │   │   │   │   ├── mipmap-mdpi
│   │   │   │   │   │   ├── ic_launcher.png
│   │   │   │   │   │   ├── ic_launcher_foreground.png
│   │   │   │   │   │   └── ic_launcher_round.png
│   │   │   │   │   ├── mipmap-xhdpi
│   │   │   │   │   │   ├── ic_launcher.png
│   │   │   │   │   │   ├── ic_launcher_foreground.png
│   │   │   │   │   │   └── ic_launcher_round.png
│   │   │   │   │   ├── mipmap-xxhdpi
│   │   │   │   │   │   ├── ic_launcher.png
│   │   │   │   │   │   ├── ic_launcher_foreground.png
│   │   │   │   │   │   └── ic_launcher_round.png
│   │   │   │   │   ├── mipmap-xxxhdpi
│   │   │   │   │   │   ├── ic_launcher.png
│   │   │   │   │   │   ├── ic_launcher_foreground.png
│   │   │   │   │   │   └── ic_launcher_round.png
│   │   │   │   │   ├── values
│   │   │   │   │   │   ├── ic_launcher_background.xml
│   │   │   │   │   │   ├── strings.xml
│   │   │   │   │   │   └── styles.xml
│   │   │   │   │   └── xml
│   │   │   │   │       ├── config.xml
│   │   │   │   │       └── file_paths.xml
│   │   │   │   └── AndroidManifest.xml
│   │   │   └── test
│   │   │       └── java
│   │   │           └── com
│   │   │               └── getcapacitor
│   │   │                   └── myapp
│   │   │                       └── ExampleUnitTest.java
│   │   ├── .gitignore
│   │   ├── build.gradle
│   │   ├── capacitor.build.gradle
│   │   └── proguard-rules.pro
│   ├── capacitor-cordova-android-plugins
│   │   ├── src
│   │   │   └── main
│   │   │       ├── java
│   │   │       │   └── .gitkeep
│   │   │       ├── res
│   │   │       │   └── .gitkeep
│   │   │       └── AndroidManifest.xml
│   │   ├── build.gradle
│   │   └── cordova.variables.gradle
│   ├── gradle
│   │   └── wrapper
│   │       ├── gradle-wrapper.jar
│   │       └── gradle-wrapper.properties
│   ├── .gitignore
│   ├── build.gradle
│   ├── capacitor.settings.gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── local.properties
│   ├── settings.gradle
│   └── variables.gradle
├── src
│   ├── app
│   │   ├── explore-container
│   │   │   ├── explore-container.component.html
│   │   │   ├── explore-container.component.scss
│   │   │   ├── explore-container.component.spec.ts
│   │   │   └── explore-container.component.ts
│   │   ├── services
│   │   │   ├── photo-service.spec.ts
│   │   │   └── photo-service.ts
│   │   ├── tab1
│   │   │   ├── tab1.page.html
│   │   │   ├── tab1.page.scss
│   │   │   ├── tab1.page.spec.ts
│   │   │   └── tab1.page.ts
│   │   ├── tab2
│   │   │   ├── tab2.page.html
│   │   │   ├── tab2.page.scss
│   │   │   ├── tab2.page.spec.ts
│   │   │   └── tab2.page.ts
│   │   ├── tab3
│   │   │   ├── tab3.page.html
│   │   │   ├── tab3.page.scss
│   │   │   ├── tab3.page.spec.ts
│   │   │   └── tab3.page.ts
│   │   ├── tabs
│   │   │   ├── tabs.page.html
│   │   │   ├── tabs.page.scss
│   │   │   ├── tabs.page.spec.ts
│   │   │   ├── tabs.page.ts
│   │   │   └── tabs.routes.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   └── app.routes.ts
│   ├── assets
│   │   ├── icon
│   │   │   └── favicon.png
│   │   └── shapes.svg
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── theme
│   │   └── variables.scss
│   ├── global.scss
│   ├── index.html
│   ├── main.ts
│   └── test-setup.ts
├── .browserslistrc
├── .editorconfig
├── .gitignore
├── angular.json
├── capacitor.config.ts
├── eslint.config.js
├── ionic.config.json
├── package-lock.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```
