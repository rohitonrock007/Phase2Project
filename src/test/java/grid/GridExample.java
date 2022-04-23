package grid;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

public class GridExample {

	public static void main(String[] args) throws MalformedURLException {
		// TODO Auto-generated method stub

		
		DesiredCapabilities cap = new DesiredCapabilities();
		cap.setPlatform(Platform.WINDOWS);
		cap.setBrowserName("chrome");
		
		URL url = new URL("http://localhost:4444/wd/hub");
		
		WebDriver driver = new RemoteWebDriver(url,cap);
		driver.get("https://www.saucedemo.com/");
		driver.manage().window().maximize();
	driver.manage().timeouts().implicitlyWait(5000, TimeUnit.MILLISECONDS);
	
//	driver.quit();
		
	}
}
