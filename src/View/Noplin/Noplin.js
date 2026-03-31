import { BulletCard } from "noplin-uis";
import PlusIcon from "../../Asset/SVGIcons/PlusIcon";
import 'noplin-uis/dist/styles.css';

function Noplin() {
  return (
    <div>
      <BulletCard
        className="testing-detail-card"
        icon={{
          className: "testing-bullet-card-icon-class",
          content: <PlusIcon />,
        }}
        title={{
          className: "testing-steps-title-class",
          content: "Build a prompt in the Playground",
        }}
        description={{
          className:
            "testing-steps-description-class",
          content: (
            <>
              Many states offer discounts for filing
              on-time. The reduced rate is included in
              your tax return and the savings is yours
              to keep.
            </>
          ),
        }}
      />

      <BulletCard
        className="testing-detail-card"
        icon={{
          className: "testing-bullet-card-icon-class",
          content: <PlusIcon />,
        }}
        title={{
          className: "testing-steps-title-class",
          content: "Build a prompt in the Playground",
        }}
        description={{
          className:
            "testing-steps-description-class",
          content: (
            <>
              Many states offer discounts for filing
              on-time. The reduced rate is included in
              your tax return and the savings is yours
              to keep.
            </>
          ),
        }}
      />

      <BulletCard
        className="testing-detail-card"
        icon={{
          className: "testing-bullet-card-icon-class",
          content: <PlusIcon />,
        }}
        title={{
          className: "testing-steps-title-class",
          content: "Build a prompt in the Playground",
        }}
        description={{
          className:
            "testing-steps-description-class",
          content: (
            <>
              Many states offer discounts for filing
              on-time. The reduced rate is included in
              your tax return and the savings is yours
              to keep.
            </>
          ),
        }}
      />
    </div>
  );
}

export default Noplin;