import Link from "next/link";
import Image from "next/image";

const Departments = () => {
  return (
    <section id="departments" className="container my-5">
      <h2 className="text-center mb-4">Departments</h2>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <Link href="/departments/community-experience" passHref>
            <div className="card" style={{ cursor: "pointer" }}>
              <Image src="/community.jpg" width={500} height={300} className="card-img-top" alt="Community Experience" />
              <div className="card-body text-center">
                <h5 className="card-title">Community Experience</h5>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Departments;
