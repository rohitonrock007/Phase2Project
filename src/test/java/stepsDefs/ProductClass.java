package stepsDefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ProductClass {

	WebDriver driver=BaseClass.driver;
	
	@When("User is on Products Page")
	public void user_is_on_products_page() {
		String ExpTitle="PRODUCTS";
    	WebElement product=driver.findElement(By.xpath("//span[@class='title']"));
    	String actual=product.getText();
    	Assert.assertEquals(ExpTitle, actual);
    	System.out.println("User is on Products Page");  
	}

	@Then("User compare the following products price")
	public void user_compare_the_following_products_price(io.cucumber.datatable.DataTable dataTable) {
		int rows = dataTable.height();
		for(int i=0;i<rows;i++) {
			
			String product= dataTable.cell(i, 0);
			String price= dataTable.cell(i, 1);
			String actualprice=driver.findElement(By.xpath("//div[text()='"+product+"']/following::div[@class='inventory_item_price'][1]")).getText();
			Assert.assertEquals(price, actualprice);
		}
	}

}
