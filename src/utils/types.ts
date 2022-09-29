import {Moment} from 'moment';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {
  DateChangedCallback,
  MomentParsable,
} from 'react-native-calendar-picker';

export interface MinDurationArrayItem {
  date: MomentParsable;
  minDuration: number;
}
export interface MaxDurationArrayItem {
  date: MomentParsable;
  maxDuration: number;
}

export type DisabledDatesFunc = (date: Moment) => boolean;

export interface CalendarProps {
  height?: number | undefined; // height of the calendar
  width?: number | undefined; // width of the calendar
  firstDay?: any | undefined; // first day of the week
  selectedStartDate?: Date | undefined; // specifies a selected Start Date.
  selectedEndDate?: Date | undefined; // specifies a selected End Date.
  textStyle?: TextStyle | undefined; // style overall text
  maxDate?: Date | undefined; // max Date of the calendar
  minDate?: Date | undefined; // min Date of the calendar
  todayBackgroundColor?: string | undefined; // color of today day
  startFromMonday?: boolean | undefined; // days start with monday
  allowRangeSelection?: boolean | undefined; // allow to select day range
  allowBackwardRangeSelect?: boolean | undefined; // allow backward range selection
  selectedDayColor?: string | undefined; // Color for selected day
  nextTitle?: string | undefined; //  Title of button for next month
  nextTitleStyle?: TextStyle | undefined; // text style for next text
  previousTitle?: string | undefined; //  Title of button for previous month
  previousTitleStyle?: TextStyle | undefined; // text style for previous text
  selectedDayTextColor?: string | undefined; // Text color for selected day
  showDayStragglers?: boolean | undefined; // previous & next month days in empty slots
  scaleFactor?: number | undefined; // default scale to window width
  monthTitleStyle?: StyleProp<TextStyle> | undefined; // color of the Month Title
  yearTitleStyle?: StyleProp<TextStyle> | undefined; // color of the Year Title
  dayLabelsWrapper?: ViewStyle | undefined; // Style for weekdays wrapper
  selectMonthTitle?: string | undefined; // Title of month selector view
  selectYearTitle?: string | undefined; // Title of year selector view
  headingLevel?: number | undefined; // Sets the aria-level for the calendar title heading when on Web
  dayShape?: any | undefined; // Shape of the Day component
  restrictMonthNavigation?: boolean | undefined; // Whether to disable Previous month button if it is before minDate or Next month button if it is after MaxDate or MinDate
  enableDateChange?: boolean | undefined; // Whether to enable pressing on day
  horizontal?: boolean | undefined; // Scroll axis when scrollable set
  scrollable?: boolean | undefined; // Months are scrollable if true
  initialDate?: Date | undefined; // Date that calendar opens to
  todayTextStyle?: TextStyle | undefined; // Text styling for today
  minRangeDuration?: number | MinDurationArrayItem[] | undefined; // Specifies a maximum range duration when using allowRangeSelection
  maxRangeDuration?: number | MaxDurationArrayItem[] | undefined; //  Specifies a maximum range duration when using allowRangeSelection
  disabledDatesTextStyle?: TextStyle | undefined; // Text styling for disabled dates
  disabledDates?: Date[] | DisabledDatesFunc | undefined; // Specifies dates that cannot be selected. Array of Dates, or a function that returns true for a given Moment date
  selectedDisabledDatesTextStyle?: Object | undefined; // Text style for ineligible dates during range selection
  selectedRangeStyle?: ViewStyle | undefined; // Container style for all days in range selection
  selectedRangeStartStyle?: ViewStyle | undefined; // Container style for start day of range
  selectedRangeEndStyle?: ViewStyle | undefined; // Container style for end day of range
  selectedRangeStartTextStyle?: Object | undefined; // Text style for start day of range
  selectedRangeEndTextStyle?: Object | undefined; // Text style for end day of range
  selectedDayTextStyle?: Object | undefined; // Text style for all selected day
  weekdays?: string[] | undefined;
  months?: string[] | undefined;
  selectedDayStyle?: ViewStyle | undefined; // Style for selected day. May override selectedDayColor
  previousComponent?: any | undefined; // Component to use in Previous button. Overrides previousTitle & previousTitleStyle
  nextComponent?: any | undefined; // Component to use in Next button. Overrides nextTitle & nextTitleStyle
  onMonthChange?: DateChangedCallback | undefined; // Callback when Previous / Next month is pressed
  onDateChange?: DateChangedCallback | undefined; // Callback when a date is selected
  startDateTitle?: string; // selected Start Date
  endDateTitle?: string; // selected End Date
}
