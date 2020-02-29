<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>Send_Chat_To_Slackboot</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <testSuiteGuid>436ca169-bd58-40af-affb-541aa4e85332</testSuiteGuid>
   <testCaseLink>
      <guid>ad46dc59-5773-4c31-953a-0fcbb875fde9</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Slack/Navigate_URL</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>acb4c06c-0c93-4f41-a53a-f42634d89c06</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Slack/Go_To_WorkSpace</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>6cd9a5e6-60bb-4cfa-b17c-dec7701b3606</id>
         <iterationEntity>
            <iterationType>RANGE</iterationType>
            <value>1-1</value>
         </iterationEntity>
         <testDataId>Data Files/workspace</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>6cd9a5e6-60bb-4cfa-b17c-dec7701b3606</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>workspace</value>
         <variableId>9a6fb366-f32f-45ba-a648-fd64e39b53ff</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>ccbd8ef0-655f-436a-9d2d-a98a110f4d8c</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Slack/Submit_UserName_Pass</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>7d0443dc-4506-4795-94c9-a689c072d162</id>
         <iterationEntity>
            <iterationType>RANGE</iterationType>
            <value>1-1</value>
         </iterationEntity>
         <testDataId>Data Files/tesLogin</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>7d0443dc-4506-4795-94c9-a689c072d162</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>user_name</value>
         <variableId>87ee5b6d-e71e-40d9-bffc-7ab169b13839</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>7d0443dc-4506-4795-94c9-a689c072d162</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>4abc90f5-cdf7-4f46-a295-6dca0943725f</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>623077a9-09d3-4559-8870-a23b440d6b69</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Slack/Send_Chating</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>ded6d3e4-8011-4fd5-9dcd-9d5e1d0fc83f</id>
         <iterationEntity>
            <iterationType>RANGE</iterationType>
            <value>1-1</value>
         </iterationEntity>
         <testDataId>Data Files/message</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>ded6d3e4-8011-4fd5-9dcd-9d5e1d0fc83f</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>message</value>
         <variableId>61ce555d-818a-4061-986c-058f2408ac98</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
