import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable

WebUI.click(findTestObject('MidtransPillow/_button_checkout'))

WebUI.switchToFrame(findTestObject('MidtransPillow/_new_frame'), 0)

WebUI.click(findTestObject('MidtransPillow/button_continue'))

WebUI.click(findTestObject('MidtransPillow/_credit_card'))

WebUI.setText(findTestObject('MidtransPillow/_card_number'), '4811 1111 1111 1114')

WebUI.setText(findTestObject('MidtransPillow/_expired_date'), '02 20')

WebUI.setText(findTestObject('MidtransPillow/_cvv'), '123')

WebUI.click(findTestObject('MidtransPillow/button_continue'))

WebUI.delay(3)

WebUI.switchToDefaultContent()

WebUI.switchToFrame(findTestObject('MidtransPillow/_new_frame'), 0)

WebUI.waitForElementPresent(findTestObject('MidtransPillow/_password'), 0)

WebUI.click(findTestObject('MidtransPillow/_password'))

WebUI.setText(findTestObject('MidtransPillow/_password'), '112233')

WebUI.click(findTestObject('MidtransPillow/btn_ok'))

WebUI.delay(100)

