import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';



export default function ResponsiveDatePickers() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DatePicker',
          'MobileDatePicker',
          'DesktopDatePicker',
          'StaticDatePicker',
        ]}
      >
        <DemoItem label="Static variant">
          <StaticDatePicker defaultValue={dayjs('2023-03-17')} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}

















// import { ResponsiveCalendar } from '@nivo/calendar'

// // make sure parent container have a defined height when using
// // responsive component, otherwise height will be 0 and
// // no chart will be rendered.
// // website examples showcase many properties,
// // you'll often use just a few of them.
// const Calendar = ({ data /* see data tab */ }: any) => (
//     <ResponsiveCalendar
//         data={data}
//         from="2015-03-01"
//         to="2016-07-12"
//         emptyColor="#eeeeee"
//         colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
//         margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
//         direction="vertical"
//         yearSpacing={40}
//         monthBorderColor="#ffffff"
//         dayBorderWidth={2}
//         dayBorderColor="#ffffff"
//         legends={[
//             {
//                 anchor: 'bottom-right',
//                 direction: 'row',
//                 translateY: 36,
//                 itemCount: 4,
//                 itemWidth: 42,
//                 itemHeight: 36,
//                 itemsSpacing: 14,
//                 itemDirection: 'right-to-left'
//             }
//         ]}
//     />
// )
// export default Calendar