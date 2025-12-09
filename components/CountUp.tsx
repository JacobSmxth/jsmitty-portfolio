export default function CountUp({
  to,
  className = '',
  separator = ''
}: {
  to: number;
  from?: number;
  direction?: 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}) {
  const getDecimalPlaces = (num: number) => {
    const str = num.toString();
    if (str.includes('.')) {
      const decimals = str.split('.')[1];
      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }
    return 0;
  };

  const maxDecimals = getDecimalPlaces(to);
  const hasDecimals = maxDecimals > 0;

  const options = {
    useGrouping: !!separator,
    minimumFractionDigits: hasDecimals ? maxDecimals : 0,
    maximumFractionDigits: hasDecimals ? maxDecimals : 0
  };

  const formattedNumber = Intl.NumberFormat('en-US', options).format(to);
  const displayValue = separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;

  return <span className={className}>{displayValue}</span>;
}
