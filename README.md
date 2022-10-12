# Custom Calendar Picker

This is the Calendar Picker Component for React Native.

### CalendarPicker

The scrollable prop was introduced in 7.0.0 and features a bi-directional infinite scroller. It recycles months using RecyclerListView, shifting them as the ends are reached. If the Chrome debugger is used during development, month shifting may be erratic due to a [RN setTimeout bug](https://github.com/facebook/react-native/issues/4470). To prevent month shifts at the ends of the scroller, set restrictMonthNavigation, minDate, and maxDate range to 5 years or less.

![Logo](https://user-images.githubusercontent.com/6295083/82028634-87a2b880-965b-11ea-90ce-1bde67f31157.gif)

# Prerequisites

CalendarPicker requires Moment JS >=2.0. Date props may be anything parseable by Moment: Javascript Date, Moment date, or ISO8601 datetime string.

```javascript
npm install --save moment
```

```javascript
yarn add --save moment
```

```javascript
npm install --save react-native-calendar-picker
```

```javascript
yarn add --save react-native-calendar-picker
```

## CalendarPicker Props

All the Props are Optional in the component.
| Prop | Type | Description |
| ------------------- | ------------------------ | ------------------------------------------ |
| height | Number | Height of the CalendarPicker's container. Defaults to Dimensions height. |
| width | Number | Width of the CalendarPicker's container. Defaults to Dimensions width. |
| minDate | Date | Specifies minimum date to be selected. |
| maxDate | Date | Specifies maximum date to be selected. |
| months | Array | List of months names. |
| weekends | Array | List of week days. |
| dayShape | String | Shape of the Day component. |
| nextTitle | String | Title of button for next month. |
| previousTitle | String | Title of button for previous month. |
| textStyle | TextStyle | Style overall text. Change fontFamily, color, etc. |
| horizontal | Boolean | Scroll axis when scrollable set. Default is true. |
| scrollable | Boolean | Months are scrollable if true. Default is false. |
| scaleFactor | Number | Default (375) scales to window width. |
| initialDate | Date | Date that calendar opens to. Defaults to today. |
| headingLevel | Number | Sets the aria-level for the calendar title heading when on Web. Default is 1. |
| disabledDates | Array or function | Specifies dates that cannot be selected. Array of Dates, or a function that returns true for a given Moment date. |
| nextComponent | Object | Component to use in Next button. Overrides nextTitle & nextTitleStyle. |
| previousComponent | Object | Component to use in Previous button. Overrides previousTitle & previousTitleStyle. |
| yearTitleStyle | TextStyle | Text styling for header's year text. |
| monthTitleStyle | TextStyle | Text styling for header's month text. |
| todayTextStyle | TextStyle | Text styling for today. |
| selectYearTitle | String | Title of year selector view. Default is "Select Year". |
| startFromMonday | Boolean | Default first day of week will be Sunday. You can set start of week from Monday by setting this to true. Default is false. |
| dayLabelsWrapper | ViewStyle | Style for weekdays wrapper. |
| selectMonthTitle | String | Title of month selector view. |
| enableDateChange | Boolean | Whether to enable pressing on day. Default is true. |
| minRangeDuration | Number or Array | Specifies a minimum range duration when using allowRangeSelection. Can either pass a number to be used for all dates or an Array of objects if the minimum range duration depends on the date. |
| maxRangeDuration | Number or Array | Specifies a maximum range duration when using allowRangeSelection. Can either pass a number to be used for all dates or an Array of objects if the maximum range duration depends on the date. |
| selectedDayColor | String | Color for Selected Day. |
| showDayStragglers | Boolean | Populate previous & next month days in empty slots. Default is false. |
| previousTitleStyle | TextStyle | TextStyle for the previous Text. |
| selectedRangeStyle | ViewStyle | Container style for all days in range selection. |
| allowRangeSelection | Boolean | Allow to select date ranges. Default is false. |
| todayBackgroundColor| String | Background color for today. |
| selectedDayTextStyle| Object | Text style for selected day (including all days in range). |
| selectedDayTextColor| String | Text color for selected day. |
| selectedRangeEndStyle|ViewStyle | Container style for end day of range. |
| disabledDatesTextStyle| TextStyle | Text styling for disabled dates. |
| selectedRangeStartStyle| ViewStyle | Container style for start day of range. |
| restrictMonthNavigation| Boolean | Whether to disable Previous month button if it is before minDate or Next month button if it is after MaxDate. Default is false. |
| allowBackwardRangeSelect| Boolean | Allow selecting range in reverse. Default is false. |
| selectedRangeEndTextStyle| Object | Text style for end day of range. |
| selectedRangeStartTextStyle| Object | Text style for start day of range. |
| selectedDisabledDatesTextStyle| Object | Text style for ineligible dates during range selection. |
| onMonthChange | Function | Callback when Previous / Next month is pressed. Returns Moment date as first parameter

## Styles

Some styles will overwrite some won't. For instance:

- If you provide textStyle with fontFamily and color, out of ranges dates will not apply your color, just fontFamily.

Order of precedence:

- defaultColor => textStyle => selectedDayColor
- defaultTodayBackgroundColor => todayBackgroundColor
- defaultBackgroundColor => selectedDayColor
- defaultTextStyles => textStyle => selectedDayTextColor

## Color Reference

| Color            | Hex                                                           |
| ---------------- | ------------------------------------------------------------- |
| Black Color      | ![Logo](https://via.placeholder.com/10/000000?text=+) #000000 |
| Lightgreen Color | ![Logo](https://via.placeholder.com/10/90EE90?text=+) #90EE90 |
| Violet Color     | ![Logo](https://via.placeholder.com/10/7300e6?text=+) #7300e6 |

## More Examples

Start from Monday, allowRangeSelection, Min and Max Dates and Styles Changes Example
alt tag

![Logo](https://user-images.githubusercontent.com/6295083/82028654-8f625d00-965b-11ea-8076-45ae609be296.gif)
