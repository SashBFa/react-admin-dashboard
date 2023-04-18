import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from '@syncfusion/ej2-react-charts';

type SparklineTypes = {
  id: string;
  height: string;
  width: string;
  color: string;
  data: {
    x: number;
    yval: number;
  }[];
  type: 'Line' | 'Column' | 'WinLoss' | 'Pie' | 'Area' | undefined;
  currentColor: string;
};

export const SparkLine = ({
  id,
  height,
  width,
  color,
  data,
  type,
  currentColor,
}: SparklineTypes) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      tooltipSettings={{
        visible: true,
        // eslint-disable-next-line no-template-curly-in-string
        format: '${x} : data ${yval}',
        trackLineSettings: {
          visible: true,
        },
      }}
      markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};
