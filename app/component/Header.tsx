type Headerprops = {
    title: String;
    total: number;
}

export default function Header({title, total}: Headerprops) {
    return (
        <div>
            <h1>{title} - Total {total}</h1>
        </div>
    );
  }
  