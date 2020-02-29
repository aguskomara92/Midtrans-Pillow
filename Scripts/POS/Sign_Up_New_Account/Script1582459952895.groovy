import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

WebUI.setText(findTestObject('POS/New_Account/_first_name'), _first_name)

WebUI.setText(findTestObject('POS/New_Account/_last_name'), _last_name)

WebUI.setText(findTestObject('POS/New_Account/_email'), _email)

WebUI.setText(findTestObject('POS/New_Account/_phone_number'), _phone_number)

not_run: WebUI.click(findTestObject('POS/New_Account/btn_file_upload'))

AssetsDir = (RunConfiguration.getProjectDir() + '/assets')

def file = '1.png'

WebUI.uploadFile(findTestObject('POS/New_Account/upload_picture'), (AssetsDir + '/') + file)

