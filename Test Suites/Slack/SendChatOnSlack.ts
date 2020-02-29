<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>SendChatOnSlack</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <testSuiteGuid>60ab2d6c-bc26-4cf9-87f9-6b4f87252888</testSuiteGuid>
   <testCaseLink>
      <guid>df002b6c-07cd-46e0-b91a-550500b886db</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Slack/Navigate_URL</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>553cafb0-4ceb-4a9e-991e-5a6c3dcd671a</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Slack/Login Slack</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>31923266-240b-479a-8176-ce2fc6746448</id>
         <iterationEntity>
            <iterationType>RANGE</iterationType>
            <value>1-1</value>
         </iterationEntity>
         <testDataId>Data Files/tesLogin</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>31923266-240b-479a-8176-ce2fc6746448</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>user_name</value>
         <variableId>5a650689-de7f-4a49-b710-e5e08e3f615c</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>31923266-240b-479a-8176-ce2fc6746448</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>894dd4fb-6d8b-4e13-b769-ab5dcc9ca9c5</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
