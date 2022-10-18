# Quarkus Insight Codestarts Notes

Guide: https://quarkus.io/version/main/guides/extension-codestart

## Tika 

guide: https://quarkiverse.github.io/quarkiverse-docs/quarkus-tika/dev/index.html
repo: https://github.com/quarkiverse/quarkus-tika

Starter Code:
```java
package org.acme;  
  
import java.io.FileInputStream;  
  
import javax.inject.Inject;  
  
import io.quarkus.runtime.QuarkusApplication;  
import io.quarkus.runtime.annotations.QuarkusMain;  
import io.quarkus.tika.TikaParser;  
  
// Enable with -Dquarkus.package.main-class=tika (build-time)  
@QuarkusMain(name = "tika")  
public class TikaParse implements QuarkusApplication {  
  
    @Inject  
    TikaParser parser;  
  
    @Override public int run(String... args) throws Exception {  
        System.out.println(parser.getText(new FileInputStream(args[0])));  
        return 0;  
    }  
}
```

### Create app with local codestart

```console
quarkus create app tika-app -x=io.quarkiverse.tika:quarkus-tika:1.0.4-SNAPSHOT
```


### Dev mode on generated app
```console
quarkus dev -Dquarkus.package.main-class=tika -Dquarkus.args=$HOME/Demo/quarkus.pdf
```