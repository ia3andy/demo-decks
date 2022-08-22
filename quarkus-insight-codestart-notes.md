# Quarkus Insight Codestarts Notes

Guide: https://quarkus.io/guides/extension-codestart

## Tika 

guide: https://quarkiverse.github.io/quarkiverse-docs/quarkus-tika/dev/index.html
repo: https://github.com/quarkiverse/quarkus-tika

Starter Code:
```java
package org.acme;  
  
import java.io.InputStream;  
  
import javax.inject.Inject;  
import javax.ws.rs.Consumes;  
import javax.ws.rs.POST;  
import javax.ws.rs.Path;  
import javax.ws.rs.Produces;  
import javax.ws.rs.core.MediaType;  
  
import io.quarkus.tika.TikaParser;  
  
@Path("/tika")  
public class TikaParserResource {  
  
    @Inject  
    TikaParser parser;  
  
    @POST  
    @Path("/pdf")  
    @Consumes({ "application/pdf" })  
    @Produces(MediaType.TEXT_PLAIN)  
    public String extractText(final InputStream stream) {  
        return parser.getText(stream);  
    }  
}
```
