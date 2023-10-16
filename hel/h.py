import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

# Set up the WebDriver (you may need to install the appropriate driver for your browser)
driver = webdriver.Chrome()

# Open the webpage you want to scroll down
driver.get("https://www.example.com")

# Wait for 20 seconds
time.sleep(20)

# Scroll down the page
driver.find_element_by_tag_name('body').send_keys(Keys.PAGE_DOWN)

# Close the WebDriver
driver.quit()
