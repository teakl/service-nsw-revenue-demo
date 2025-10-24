Feature: Check Motor Vehicle Stamp Duty

  Scenario: Verify duty calculation for a passenger vehicle
    Given I open the Service NSW motor vehicle stamp duty page
    When I click the "Check online" button
    Then the Revenue NSW calculator page should be displayed
    When I select "Yes" for passenger vehicle
    And I enter "35000" as the vehicle price
    And I click the "Calculate" button
    Then I should see the popup window showing "Duty payable $1,050.00"
