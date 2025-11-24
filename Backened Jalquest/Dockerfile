FROM eclipse-temurin:21-jdk
WORKDIR /app
COPY . /app
RUN chmod +x mvnw
RUN ./mvnw clean install -DskipTests
CMD ["./mvnw", "spring-boot:run"]
