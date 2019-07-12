import moment from 'moment';

const now = moment('').toDate();
type Props = {
  now: String,
  deadlineDate: String,
}
export default ({ deadlineDate }: Props) => now > new Date(deadlineDate);
