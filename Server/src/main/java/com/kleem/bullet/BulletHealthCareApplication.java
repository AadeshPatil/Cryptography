package com.kleem.bullet;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.filter.CommonsRequestLoggingFilter;

@SpringBootApplication
@ComponentScan (basePackages={"com.kleem.bullet.controller", "com.kleem.bullet.service","com.kleem.bullet.model","com.kleem.bullet.auth","com.kleem.bullet.helpers","com.kleem.bullet.configs","com.kleem.bullet.singleton"})
@EnableJpaRepositories(basePackages="com.kleem.bullet.service")
@Configuration
@EnableScheduling
public class BulletHealthCareApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(BulletHealthCareApplication.class, args);
	}
	
	@Override
	  protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
	      return builder.sources(BulletHealthCareApplication.class);
	  }
	 
	 @Bean
	    public CommonsRequestLoggingFilter logFilter() { 
	        CommonsRequestLoggingFilter filter
	          = new CommonsRequestLoggingFilter();
	        filter.setIncludeQueryString(true);
	        filter.setIncludePayload(true);
	        filter.setMaxPayloadLength(10000);
	        filter.setIncludeHeaders(false);
	        filter.setAfterMessagePrefix("REQUEST DATA : ");
	        return filter;
	    }
	
}
