FROM java:8-alpine
MAINTAINER Your Name <you@example.com>

ADD target/uberjar/clj-vchats.jar /clj-vchats/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/clj-vchats/app.jar"]
